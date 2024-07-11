
const jwt = require('jsonwebtoken');
const {getAnalyticsService} = require('../services/dashService.js');


const getAnalytics = async(req,res)=>{
    const payload = req.body;

    try{
    const result = await getAnalyticsService(payload);
        return res.status(200).send({
            success : true,
            data:result,
            msg:result.msg
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
           success:false,
           message:'Error in getAnalytics',
           error ,
        });
        
    }
}




module.exports= {getAnalytics};