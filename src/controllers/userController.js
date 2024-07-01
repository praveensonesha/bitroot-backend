
const jwt = require('jsonwebtoken');
const {signUpUserService,loginUserService, completeProfileService,getTagsService} = require('../services/userService.js');
const  JWT_SECRET  = 'chaitanyaandpraveen';


const signUpUser = async(req,res)=>{
    const payload = req.body;
    const {name,email,pass} = payload;
    try {
        const result = await signUpUserService(payload);
        return res.status(200).send({
            success : true,
            data:result,
            msg:result.msg
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
           success:false,
           message:'Error in signup',
           error ,
        });
        
    }
}

const loginUser = async (req, res) => {
    const payload = req.body;
    const { is_admin, email, password } = payload;
    try {
        const [result] = await loginUserService(payload);        
        if (result.authenticated) {
            const token = jwt.sign({ email, password,is_admin }, JWT_SECRET, { expiresIn: '4h' });
            return res.status(200).send({
                success: true,
                data: result,
                token,
                msg: result.msg
            });
        } else {
            return res.status(401).send({
                success: false,
                message: 'Invalid credentials!'
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in login',
            error,
        });
    }
};

const test = async(req,res)=>{
    console.log('inn test function');
    res.status(200).send({msg:"auth route working"})
}

const completeProfile = async(req,res) => {
    const payload = req.body;
    const { contact,linkedin,yoe,tags} = payload;
    try {
        const [result] = await completeProfileService(payload);        
        
        return res.status(200).send({
            success: true,
            data: result,
            msg: result.msg
         });
      
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in complete profile',
            error,
        });
    }
}

const getTags = async(req,res)=>{
    const payload = req.body;
    try {
        const [result] = await getTagsService(payload);        
        
        return res.status(200).send({
            success: true,
            data: result,
            msg: result.msg
         });
      
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in get tags',
            error,
        });
    }

}

const verifyToken = async(req,res)=>{
    const payload = req.body;
    const {token} = payload;
    try {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                console.error('Error verifying token:', err);
                return res.status(403).send({ message: 'Invalid token!' });
            }
        });
        
        return res.status(200).send({
            success: true
         });
      
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'Error in get tags',
            error,
        });
    }

}

module.exports= {signUpUser,loginUser,test,completeProfile,getTags,verifyToken};