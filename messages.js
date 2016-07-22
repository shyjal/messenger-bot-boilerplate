'use strict'
const messages={
	'menu' : {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: [{
            title: 'Your awsome bot',
            subtitle: 'Click any button to continue',
            item_url: 'http://me.shyjal.com/',               
            image_url: 'http://messengerdemo.parseapp.com/img/rift.png',
            buttons: [{
              type: 'postback',
              title: 'Image',
              payload: 'image',
            }, {
              type: 'postback',
              title: 'Generic',
              payload: 'generic',
            },{
              type: 'postback',
              title: 'Receipt',
              payload: 'receipt',
            }],
          }]
        }
      }
    },
	'default' : {
      text: 'Hit the thumbs up button to show menu.'
    },
	'image' : {
      attachment: {
        type: 'image',
        payload: {
          url: 'http://i.imgur.com/zYIlgBl.png'
        }
      }
    },
    'button' : {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'button',
          text: 'This is test text',
          buttons:[{
            type: 'web_url',
            url: 'http://me.shyjal.com/',
            title: 'Open Web URL'
          }, {
            type: 'postback',
            title: 'Call Postback',
            payload: 'default'
          }]
        }
      }
    },
    'generic' : {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: [{
            title: 'rift',
            subtitle: 'Next-generation virtual reality',
            item_url: 'http://me.shyjal.com/',               
            image_url: 'http://messengerdemo.parseapp.com/img/rift.png',
            buttons: [{
              type: 'web_url',
              url: 'http://me.shyjal.com/',
              title: 'Open Web URL'
            }, {
              type: 'postback',
              title: 'Call Postback',
              payload: 'default',
            }],
          }, {
            title: 'touch',
            subtitle: 'Your Hands, Now in VR',
            item_url: 'http://me.shyjal.com/',               
            image_url: 'http://messengerdemo.parseapp.com/img/touch.png',
            buttons: [{
              type: 'web_url',
              url: 'http://me.shyjal.com/',
              title: 'Open Web URL'
            }, {
              type: 'postback',
              title: 'Call Postback',
              payload: 'default',
            }]
          }]
        }
      }
    },
    'receipt':{
      attachment: {
        type: 'template',
        payload: {
          template_type: 'receipt',
          recipient_name: 'Peter Chang',
          order_number: 'receiptId',
          currency: 'USD',
          payment_method: 'Visa 1234',        
          timestamp: '1428444852', 
          elements: [{
            title: 'Oculus Rift',
            subtitle: 'Includes: headset, sensor, remote',
            quantity: 1,
            price: 599.00,
            currency: 'USD',
            image_url: 'http://messengerdemo.parseapp.com/img/riftsq.png'
          }, {
            title: 'Samsung Gear VR',
            subtitle: 'Frost White',
            quantity: 1,
            price: 99.99,
            currency: 'USD',
            image_url: 'http://messengerdemo.parseapp.com/img/gearvrsq.png'
          }],
          address: {
            street_1: '1 Hacker Way',
            street_2: '',
            city: 'Menlo Park',
            postal_code: '94025',
            state: 'CA',
            country: 'US'
          },
          summary: {
            subtotal: 698.99,
            shipping_cost: 20.00,
            total_tax: 57.67,
            total_cost: 626.66
          },
          adjustments: [{
            name: 'New Customer Discount',
            amount: -50
          }, {
            name: '$100 Off Coupon',
            amount: -100
          }]
        }
      }
    }

}

module.exports = messages