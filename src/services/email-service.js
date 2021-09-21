'use strict'
let config = require('../config');
let sendgrid = require('sendgrid')(config.sendGridKey);

exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'suporte-nodestr@hotmail.com',
        subject: subject,
        html: body
    })
}