const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to:email,
    from:'milos.mladenovic.work@gmail.com',
    subject:'Thanks for joining in!',
    text:`Welcome ${name}, have a nice day.`
  })
}

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to:email,
    from:'milos.mladenovic.work@gmail.com',
    subject:`Goodbye ${name}, we will miss you!`,
    text:'We would like to ask you why have you left for sake of improving our services'
  })
}

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail
}