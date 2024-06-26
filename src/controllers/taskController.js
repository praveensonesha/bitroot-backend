
const jwt = require('jsonwebtoken');
const {createTaskService} = require('../services/taskService.js');
const { requiredParams } = require('../utils/utils.js');
const  JWT_SECRET  = 'chaitanyaandpraveen';


const createTask = async(req,res)=>{
    const payload = req.body;
    const {name,desc,tags,github_url,guideline_url,lower_price,higher_price} = payload;
    if(!name || !desc|| !tags || !github_url || !lower_price || !higher_price)requiredParams(res,400,"name/desc/tags/github_url/prices are compulsory fields !")

    const result = await createTaskService(payload);
    try {
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

module.exports= {createTask};