require('dotenv').config()
const nodemailer = require('nodemailer')
//let transport = nodemailer.createTransport(options[, defaults])

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e11d19bc3faffe",
      pass: "524f075ca3a596"
    }
  })

  //  const mailOptions = {
//     from: 'rashmipullur1@gmail.com', // Sender address
//     to: 'something@gmail.com', // List of recipients
//     subject: 'Node Mailer', // Subject line
//     text: 'I hope this one actually get to you!', // Plain text body
// };

// transport.sendMail(sendWelcomeEmail, function(err, info) {
//    if (err) {
//      console.log(err)
//    } else {
//      console.log(info);
//    }
// })


const sendWelcomeEmail = (email, name) => {
    transport.sendMail({
        from: 'rashmipullur1@gmail.com',
        to: email,
        subject: 'Welcome to the app.',
        text: `Hello, ${name}. Let me know how you get along with the app.` // template string
    }, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
     })
}

const sendCancellationEmail = (email, name) => {
    transport.sendMail({
        from: 'rashmipullur1@gmail.com',
        to: email,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.` // template string
    }, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
     })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}



