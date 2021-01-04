
const sgMail = require("@sendgrid/mail");
const Mailgen = require("mailgen");
require("dotenv").config();

class EmailService {
  #sender = sgMail;
  #GenerateTemplate = Mailgen;

  #createTemplate = (verifyToken) => {
    const mailGenerator = new this.#GenerateTemplate({
      theme: "default",
      product: {
        name: "GoIT Projects",
        link: "https://project-manager-goit20.herokuapp.com/",
      },
    });
    const template = {
      body: {
        intro:
          "Welcome to GoIT Projects! We're very excited to have you on board.",
        action: {
          instructions: "To get started with GoIT Projects, please click here:",
          button: {
            color: "#FF6B08",
            text: "Confirm your account",
            link: ` https://project-manager-goit20.herokuapp.com/api/auth/verify/${verifyToken}`,
          },
        },
        outro:
          "Need help, or have questions? Just reply to this email, we'd love to help.",
      },
    };
    const emailBody = mailGenerator.generate(template);
    return emailBody;
  };

  async sendEmail(verifyToken, email) {
    const emailBody = this.#createTemplate(verifyToken);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: "goit20online@gmail.com", // Change to your verified sender
      subject: "Please Verify Your GoIT Projects Account",
      html: emailBody,
    };

    await this.#sender.send(msg);
  }
}
module.exports = {
  sendEmail,
};
