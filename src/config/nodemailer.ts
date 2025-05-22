import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_SENDER_USER,
        pass: process.env.MAIL_SENDER_PASSWORD
    }
});

export const mailOptions = {
    from: process.env.MAIL_SENDER_USER,
    to: process.env.MAIL_SENDER_USER
}