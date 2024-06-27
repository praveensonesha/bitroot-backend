const express = require('express');
const router = express.Router();

const {authenticateToken} = require('../utils/authmiddlewares.js');
const { createTask,assignTask, getTasks, startTask} = require('../controllers/taskController.js');


router.post('/createTask',createTask);
router.post('/assignTask',assignTask);
router.post('/getTasks',getTasks);
router.post('/startTask',startTask);

module.exports = router;