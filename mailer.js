import nodemailer from "nodemailer";

const mailer = async (text) => {
  try {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const info = await transporter.sendMail({
      from: '"Mathieu Smolarz" <mathieu@smolarz.com>',
      to: "mathieu.smolarz@gmail.com",
      subject: "Updated positions",
      text,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error(error);
  }
};

export default mailer;
