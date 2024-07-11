const db = require("../../config/db");

const getAnalyticsService = async (payload) => {
    const {task} = payload;
    try {
        const [[result]] = await db.query(`CALL spGetAnalytics(?)`, [JSON.stringify(payload)]);
        return result; 
    } catch (error) {
        console.error("Error in getAnalytics service:", error);
        throw error;
    }
};



module.exports = { getAnalyticsService};
