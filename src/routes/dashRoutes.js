const express = require('express');
const router = express.Router();

const {authenticateToken} = require('../utils/authmiddlewares.js')

// Import controllers
const {getAnalytics} = require('../controllers/dashController.js')



// Define user routes
router.post('/getAnalytics',authenticateToken,getAnalytics);


module.exports = router;
