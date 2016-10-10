require('dotenv').config();
var fs = require('fs'),
nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(process.env.EMAIL_CREDS);

var recipients = fs.readFileSync('recipients.txt').toString().split("\n");

var emailTemplate = fs.createReadStream('template.html');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: process.env.FROM, // sender address
    to: recipients.toString(), // list of receivers
    subject: process.env.SUBJECT, // Subject line
    html: emailTemplate,
    text: process.env.TEXT
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
