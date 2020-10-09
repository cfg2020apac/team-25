const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const nodemailerGmailConfig = functions.config().nodemailer.gmail;

const { email: fromEmail, app_password: appPassword } = nodemailerGmailConfig.email;

const sendMailWithGmail = async (destEmail, emailSubject, mailBody) => {
  const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: fromEmail,
      pass: appPassword
    }
  }));
  
  const transporterResponse = await new Promise((res, rej) => {
    transporter.sendMail({
      from: fromEmail,
      to: destEmail,
      subject: emailSubject,
      text: mailBody
    }, (error, info) => {
      if (error) {
        rej(error);
      } else {
        res(info.response);
      }
    });
  });

  return transporterResponse;
}

module.exports = sendMailWithGmail;
