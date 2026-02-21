import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use TLS
  auth: {
    user: 'mihiraval2005@gmail.com',
    pass: 'upaomkxzfpksuptu',
  },
});


export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Email credentials missing");
    }

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      html,
    });

    // console.log("Email sent:", info.messageId);
    return info;
  } catch (err) {
    // console.error("Email sending error:", err);
    throw err;
  }
};
