// resetPasswordMiddleware.js

const nodemailer = require('nodemailer');
const speakeasy = require('speakeasy');

const sendPasswordResetEmail = async (email, otp) => {
    // Create transporter for sending emails
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mysweethome.odisha@gmail.com',
            pass: 'fhyz wlym vsdg xyiy'
        }
    });

    // Define email options
    const mailOptions = {
        from: 'mysweethome.odisha@gmail.com',
        to: email,
        subject: 'Password Reset OTP',
        text: `Your OTP for password reset is: ${otp}`
    };

    // Send email with OTP
    await transporter.sendMail(mailOptions);
};

module.exports = sendPasswordResetEmail;