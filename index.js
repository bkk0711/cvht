'use strict';
const BootBot = require('bootbot');

const bot = new BootBot({
  accessToken: 'EAALPml6OLosBALjTp1LO263ZBrBlSGAhPUm4xxdjNYDCw0NFJ475WmR2SpZAaFdmiGvprZAanKWPaaQrqqYmy89ZB0ZC9Mx3CTgpZBdbZA0AWkOdZBDypHZCm6OUhtHrE2hJXEnJuke8Ypd81BYH6s12MMT0dsflu7Kz2q1rAzxv55wZDZD',
  verifyToken: 'covanhoctap',
  appSecret: '2d51e996225e93f05e83e9281a4fc029'
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});

bot.start();