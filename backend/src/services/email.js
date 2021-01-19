const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
require('dotenv').config();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

const GenerateTemplate = Mailgen;

const createTemplate = verifyToken => {
  const mailGenerator = new GenerateTemplate({
    theme: 'default',
    product: {
      name: 'Projects GoIT-20-online',
      link: 'https://project-manager-goit20.herokuapp.com/api',
    },
  });
  const template = {
    body: {
      intro:
        "Welcome to Projects GoIT! We're very excited to have you on board.",
      action: {
        instructions: 'To get started with Projects GoIT, please click here:',
        button: {
          color: '#FF6B08',
          text: 'Confirm your account',
          link: `https://project-manager-goit20.herokuapp.com/api/auth/verify/${verifyToken}`,
        },
      },
      outro:
        "Need help, or have questions? Just visit our website, we'd love to help.",
    },
  };
  const emailBody = mailGenerator.generate(template);
  return emailBody;
};

async function sendEmail(verifyToken, email) {
  let result = await transporter.sendMail({
    from: process.env.NODEMAILER_USER,
    to: email,
    subject: 'Verify Your Email',
    text: 'This message was sent from GoIT Projects server.',
    html: createTemplate(verifyToken),
  });
  //   console.log(result);
}
module.exports = {
  sendEmail,
};
