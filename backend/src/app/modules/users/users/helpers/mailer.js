import winston from "../../../../../config/winston";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  secure: true,
  port: 465,
  auth: {
    user: "karthik.bca1417@gmail.com",
    pass: "vmbtdwyyuhndzzte",
  },
});

export const sendMail = async (toEmail, subject, message) => {
  winston.info("Inside Mail Function");
  var mailOptions = {
    from: "team_quantum@outlook.com",
    to: toEmail,
    subject: subject,
    text: message,
    html: message,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      winston.error(err);
      return;
    }
    winston.info("Mail sent successfully");
  });
};
