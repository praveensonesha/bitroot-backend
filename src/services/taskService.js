const db = require("../../config/db");

const creatTaskService = async (payload) => {
    const {name,desc,tags,github_url,guideline_url,lower_price,higher_price} = payload;
    try {
        const [[result]] = await db.query(`CALL spCreateTask(?)`, [JSON.stringify(payload)]);
        return result; 
    } catch (error) {
        console.error("Error in creatTaskService:", error);
        throw error;
    }
};



module.exports = { creatTaskService};
