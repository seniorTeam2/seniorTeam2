// login
const express = require('express');
const router = express.Router();
const authController=require('../Controllers/AuthenticationLogin')


router.post('/signup', authController.SignUpUser);






module.exports = router