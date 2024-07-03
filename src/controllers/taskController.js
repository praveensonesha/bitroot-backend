
const jwt = require('jsonwebtoken');
const {assignTaskService,createTaskService,getTasksService, startTaskService, completeTaskService,getEvalTasksService, publicTaskService,getHistoryService} = require('../services/taskService.js');
const { requiredParams } = require('../utils/utils.js');
const  JWT_SECRET  = 'chaitanyaandpraveen';


const createTask = async(req,res)=>{
    const payload = req.body;
    const {name,desc,tags,github_url,guideline_url,lower_price,higher_price,is_delete,is_update} = payload;
    if(!name || !desc|| !tags || !github_url || !lower_price || !higher_price){
        if(!is_delete && !is_update)requiredParams(res,400,"name/desc/tags/github_url/prices are compulsory fields !")
    }

    try {
    const result = await createTaskService(payload);
        return res.status(200).send({
            success : true,
            data:result,
            msg:result.msg
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
           success:false,
           message:'Error in creating task',
           error ,
        });
        
    }
}

const assignTask = async(req,res)=>{
    const payload = req.body;
    const {task_id,evaluator_id} = payload;
    if(!task_id || !evaluator_id)requiredParams(res,400,"task/eval id are compulsory fields !")

    try {
    const result = await assignTaskService(payload);
        return res.status(200).send({
            success : true,
            data:result,
            msg:result.msg
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
           success:false,
           message:error.message||'Error in assign task',
           error ,
        });
        
    }
}

const getTasks = async(req,res)=>{
    const payload = req.body;
    try {
    const [result,meta] = await getTasksService(payload);
        return res.status(200).send({
            success : true,
            data:result,
            meta:meta[0],
            msg:result.msg
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
           success:false,
           message:error.message || 'Error in assign task',
           error ,
        });
        
    }
}


const startTask =async(req,res) => {
    const payload = req.body;
    try {
    const [result] = await startTaskService(payload);
        return res.status(200).send({
            success : true,
            data:result,
            msg:result.msg
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
           success:false,
           message:error.message || 'Error in start task',
           error ,
        });
        
    }    
};


const completeTask = async(req,res)=> {
    const payload = req.body;
    try {
    const [result] = await completeTaskService(payload);
        return res.status(200).send({
            success : true,
            data:result,
            msg:result.msg
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
           success:false,
           message:error.message || 'Error in Complete task',
           error ,
        });
        
    }      
};

const getEvalTasks = async(req,res)=>{
    const payload = req.body;
    try {
    const [result,meta] = await getEvalTasksService(payload);
        return res.status(200).send({
            success : true,
            data:result,
            meta:meta[0],
            msg:result.msg
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
           success:false,
           message:error.message || 'Error in get eval task',
           error ,
        });
        
    }
}


const publicTask = async(req,res) =>{
    const payload = req.body;
    try {
    const [result] = await publicTaskService(payload);
        return res.status(200).send({
            success : true,
            data:result,
            msg:result.msg
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
           success:false,
           message:error.message || 'Error in Public task',
           error ,
        });
        
    }
};

const getHistory = async(req,res) =>{
    const payload = req.body;
    try {
    const [result,meta] = await getHistoryService(payload);
        return res.status(200).send({
            success : true,
            data:result,
            meta:meta,
            msg:result.msg
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
           success:false,
           message:error.message || 'Error in Public task',
           error ,
        });
        
    }
};

module.exports= {createTask,assignTask,getTasks,startTask,completeTask,getEvalTasks,publicTask,getHistory};