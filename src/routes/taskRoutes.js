const express = require('express');
const router = express.Router();

const {authenticateToken} = require('../utils/authmiddlewares.js');
const { createTask } = require('../controllers/taskController.js');


router.post('/creatTask',createTask);

module.exports = router;