const express = require('express');
const router = express.Router();

const {authenticateToken} = require('../utils/authmiddlewares.js')

// Import controllers
const {signUpUser,loginUser,test, completeProfile,getTags,verifyToken} = require('../controllers/userController.js');


// Define user routes
router.post('/signup',signUpUser);
router.post('/login',loginUser);
router.post('/protected-route',authenticateToken,test);
router.post('/completeProfile',authenticateToken,completeProfile);
router.post('/getTags',authenticateToken,getTags);
router.post('/verifyToken',verifyToken);


module.exports = router;
