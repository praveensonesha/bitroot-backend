const AWS = require('aws-sdk');

// Configure AWS SDK

const ses = new AWS.SES({ apiVersion: 'latest' });

/**
 * Send an email using AWS SES
 * @param {string} recipientEmail - The email address of the recipient
 * @param {string} subject - The subject of the email
 * @param {string} body - The body of the email
 */
// function sendEmail(recipientEmail, subject, body) {
//   const params = {
//     Destination: {
//       ToAddresses: ["praveensonesha2003@gmail.com"], // Correcting to use array
//     },
//     Message: {
//       Body: {
//         Text: { Data: 'body' },
//       },
//       Subject: { Data: 'subject' },
//     },
//     Source: 'bitroottest@gmail.com', // Replace with your verified sender email address
//   };

//   return ses.sendEmail(params).promise();
// }


const sendEmail = async ( recipientEmail, subject, body  ) => {
  const params = {
    Destination: {
      ToAddresses: [recipientEmail], // Correcting to use array
    },
    Message: {
      Body: {
        Text: { Data: body },
      },
      Subject: { Data: subject },
    },
    Source: 'bitroottest@gmail.com', // Replace with your verified sender email address
  };

  try {
    await ses.sendEmail(params).promise();
    console.log('Email sent successfully');
  } catch (err) {
    console.error('Error sending email:', err);
    throw err; // Propagate the error to handle it further up in the call stack
  }
};

module.exports = { sendEmail };

