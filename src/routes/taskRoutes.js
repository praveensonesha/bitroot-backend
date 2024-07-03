const express = require('express');
const router = express.Router();

const {authenticateToken} = require('../utils/authmiddlewares.js');
const { createTask,assignTask, getTasks, startTask, completeTask,getEvalTasks, publicTask,getHistory} = require('../controllers/taskController.js');


router.post('/createTask',authenticateToken,createTask);
router.post('/assignTask',authenticateToken,assignTask);
router.post('/getTasks',authenticateToken,getTasks);
router.post('/startTask',authenticateToken,startTask);
router.post('/completeTask',authenticateToken,completeTask);
router.post('/getEvalTasks',authenticateToken,getEvalTasks);
router.post('/publictask',publicTask);
router.post('/getHistory',authenticateToken,getHistory);

module.exports = router;