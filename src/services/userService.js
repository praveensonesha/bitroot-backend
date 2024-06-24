const db = require("../../config/db");

const signUpUserService = async (payload) => {
    const { name, email, pass } = payload;
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
    const { is_admin,email, pass } = payload;
    try {
        console.log(JSON.stringify(payload))
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
