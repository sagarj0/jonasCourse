const nodeMailer = require('nodemailer');

const sendEmail = async (options) => {
  //`1. create transporter

  const transporter = nodeMailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'f69550e2036012',
      pass: '8ad6138dca9f79',
    },
  });

  //2.deine the email options
  const mailOptions = {
    from: '<sagarexpt0@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  //3. send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
