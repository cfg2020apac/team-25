const functions = require('firebase-functions');

const functionsConfig = functions.config().twilio;
const accountSid = functionsConfig.twilio.account_sid;
const authToken = functionsConfig.twilio.auth_token;

const client = require('twilio')(accountSid, authToken); 
 
/**
 * 
 * @param {string} phoneNumber Phone number to send the message to in international format.
 * @param {string} message SMS message to be sent.
 */
const sendSms = async (phoneNumber, message) => {
  const messageResponse = await client.messages 
    .create({ 
        body: message, 
        from: functionsConfig.twilio.from_phone_number, 
        messagingServiceSid: functionsConfig.twilio.messaging_sid,      
        to: phoneNumber 
      });
  return messageResponse.sid;
}

module.exports = sendSms;