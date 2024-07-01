const db = require("../../config/db");
// const bcrypt = require('bcrypt');
const crypto = require('crypto');

const signUpUserService = async (payload) => {
    let { name, email, password } = payload;
    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
    payload.password = hashedPassword;
    try {
        console.log(JSON.stringify(payload))
        const [[result]] = await db.query(`CALL spSignup(?)`, [JSON.stringify(payload)]);
        
        return result; 
    } catch (error) {
        console.error("Error in signUpUserService:", error);
        throw error;
    }
};
const loginUserService = async (payload) => {
    let { is_admin,email, password } = payload;
    try {
        const hashedPassword = crypto.createHash('md5').update(password).digest('hex');
        console.log(hashedPassword);
        payload.password = hashedPassword
        const [[result]] = await db.query(`CALL spLogin(?)`, [JSON.stringify(payload)]);
        
        return result; 
    } catch (error) {
        console.error("Error in loginUserService:", error);
        throw error;
    }
};

const completeProfileService = async(payload) => {
    const {contact,linkedin,yoe,tags} = payload;
    try {
        console.log(JSON.stringify(payload))
        const [[result]] = await db.query(`CALL spCompleteProfile(?)`, [JSON.stringify(payload)]);
        
        return result; 
    } catch (error) {
        console.error("Error in CompleteProfile:", error);
        throw error;
    }
}
const getTagsService = async(payload) => {
    try {
        console.log(JSON.stringify(payload))
        const [result] = await db.query(`CALL spGetTags(?)`, [JSON.stringify(payload)]);
        
        return result; 
    } catch (error) {
        console.error("Error in getTags:", error);
        throw error;
    }
}


module.exports = { signUpUserService,loginUserService,completeProfileService,getTagsService};
