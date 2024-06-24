const express = require('express');
const router = express.Router();

const {authenticateToken} = require('../utils/authmiddlewares.js')

// Import controllers
const {signUpUser,loginUser,test, completeProfile} = require('../controllers/userController.js');


// Define user routes
router.post('/signup',signUpUser);
router.post('/login',loginUser);
router.post('/protected-route',authenticateToken,test);
router.post('/completeProfile',completeProfile);

module.exports = router;
