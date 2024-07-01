const express = require('express');
const router = express.Router();
const { handleUserRegister } = require('../../controllers/user/UserRegister');
const { handleUserLogin } = require('../../controllers/user/UserLogin');

router.post('/register', handleUserRegister);
router.post('/login', handleUserLogin);

module.exports = router;
