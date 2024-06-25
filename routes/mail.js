var express = require('express');
var router = express.Router();
var emailServer   = require("emailjs/email");

/* GET users listing. */
router.post('/', function(req, res, next) {
 
    //get the text, subject and the email address to send the mail to
    const { text, subject, emails, emailsCopy, from } = req.body;
var email='';
// get name and emails from the array of emails
emails.forEach((e) => {
    email += `${e.name} <${e.email}>, `;
}
);
// remove the last comma
email = email.slice(0, -2);
// get the emails to copy
var emailCopy = '';
emailsCopy.forEach((e) => {
    emailCopy += `${e.name} <${e.email}>, `;
}
);
// remove the last comma
emailCopy = emailCopy.slice(0, -2);

var emailFrom='Name <monadresse@email.com>';
//if from is not empty, add it to the email
if (from) {
    emailFrom = `${from.name} <${from.email}>`;
}


    const client = emailServer.server.connect({
        user: process.env.SMTPUSER || 'monadresse@email.com',
        password: process.env.SMTPPASSWORD || 'MotDePasse',
        host: process.env.SMTPHOST || 'smtp.monsite.com',
        ssl: process.env.SMTPSSL || true,
    });
    
    // send the message and get a callback with an error or details of the message that was sent
    client.send(
        {
            text: text,
            from: emailFrom,
            to: email,
            cc: emailCopy,
            subject: subject,
        },
        (err, message) => {
            console.log(err || message);
            if (err) {
               return res.status(500).send(err);
            }
            else {
              return  res.status(200).send({ message: 'Email sent', 
                email: email,
                emailCopy: emailCopy,
                from: emailFrom,
                subject: subject,
                text: text


                });
            }
        }
    );
});

module.exports = router;
