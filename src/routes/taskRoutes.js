const express = require('express');
const router = express.Router();

const {authenticateToken} = require('../utils/authmiddlewares.js');
const { createTask,assignTask} = require('../controllers/taskController.js');


router.post('/creatTask',createTask);
router.post('/assignTask',assignTask);

module.exports = router;