// resetPasswordRoutes.js

const express = require('express');
const router = express.Router();
// const { sendOTP, verifyOTP, updatePassword } = require('../../controller/resetPasswordController');
const { sendOTP, verifyOTP, updatePassword } = require('../../controllers/user/resetPasswordController');


// Route to send OTP
router.post('/reset-password', sendOTP);

// Route to verify OTP
router.post('/verify-otp', verifyOTP);

// Route to update password
router.post('/update-password', updatePassword);

module.exports = router;
