const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});
async function sendEmail(verifyToken, email) {
  let result = await transporter.sendMail({
    from: process.env.NODEMAILER_USER,
    to: email,
    subject: "Verify Your Email",
    text: "This message was sent from GoIT Projects server.",
    html: `Hi, <br/>This <i>message</i> was sent from <strong>GoIT Projects</strong> server. 
    In order to complete the registration process, please click the confirmation link: http://localhost:3000/api/auth/verify/${verifyToken}}`,
    html: `Hi, <br/>This <i>message</i> was sent from <strong>GoIT Projects</strong> server. <br/>
    In order to complete the registration process, <br/>
    please click the confirmation link: http://localhost:3000/api/auth/verify/${verifyToken}`,
  });
  //   console.log(result);
}
module.exports = {
  sendEmail,
};
