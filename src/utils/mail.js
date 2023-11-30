import { mailConfig } from "@/AppData/appConfig";
import nodemailer from "nodemailer";

const { FROM, HOST, PASS, PORT, SECURE, TO, USER, SUBJECT } = mailConfig;

export const transporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: SECURE,
  auth: {
    user: USER,
    pass: PASS,
  },
});

export const mailOptions = {
  from: FROM,
  to: TO,
  subject: SUBJECT,
};
