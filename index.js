'use strict'
const http = require('http');
const Bot = require('./core');
const messages = require('./messages');

let bot = new Bot({
  token: 'xxxx',
  verify: 'typethisismfbdevdashboard',
  app_secret: 'xxxx'
});

bot.on('error', (err) => {
  console.log(err.message);
});

bot.on('message', (payload, reply) => {
  console.log('Recieved message payload ', payload);

  let text = payload.message.text;
  let openMenu = payload.message.sticker_id;

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    //Send menu to like sticker input
    if (openMenu) {
      reply(messages.menu);
      return;
    }

    //Catch text message
    if (text) {
      if (messages[text.toLowerCase()])
        reply(messages[text.toLowerCase()]);
      else
        reply(messages.default);
    }
  })

});

bot.on('postback', (payload, reply) => {
  console.log('Receieved Post back ',payload);

  if (payload.postback) {
    reply(messages[payload.postback.payload.toLowerCase()]);
  }

});

// For easy deployment to heroku process.env.PORT is used
http.createServer(bot.middleware()).listen(process.env.PORT || 3000);
console.log('Echo bot server running at port : ' + process.env.PORT);
