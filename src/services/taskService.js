const db = require("../../config/db");

const createTaskService = async (payload) => {
    const {name,desc,tags,github_url,guideline_url,lower_price,higher_price} = payload;
    try {
        const [[result]] = await db.query(`CALL spCreateTask(?)`, [JSON.stringify(payload)]);
        return result; 
    } catch (error) {
        console.error("Error in createTaskService:", error);
        throw error;
    }
};

const assignTaskService = async (payload) => {
    const {task_id,evaluator_id} = payload;
    try {
        const [[result]] = await db.query(`CALL spAssignTask(?)`, [JSON.stringify(payload)]);
        console.log(result);
        return result; 
    } catch (error) {
        console.error("Error in assignTaskService:", error);
        throw error;
    }
};


const getTasksService = async (payload) => {
    const {task_id,evaluator_id} = payload;
    try {
        const [result,meta] = await db.query(`CALL spGetTasks(?)`, [JSON.stringify(payload)]);
        console.log(result);
        return result; 
    } catch (error) {
        console.error("Error in assignTaskService:", error);
        throw error;
    }
};

const startTaskService = async(payload) => {
    const { task_id } = payload;
    try {
        const [result] = await db.query(`CALL spstartTask(?)`, [JSON.stringify(payload)]);
        console.log(result);
        return result; 
    } catch (error) {
        console.error("Error in startTaskService:", error);
        throw error;
    }
};


const completeTaskService = async (payload) => {
    try {
        const [result] = await db.query(`CALL spcompleteTask(?)`, [JSON.stringify(payload)]);
        console.log(result);
        return result; 
    } catch (error) {
        console.error("Error in completeTaskService:", error);
        throw error;
    }
};

const getEvalTasksService = async (payload) => {
    const {task_id,evaluator_id} = payload;
    try {
        const [result,meta] = await db.query(`CALL spGetEvalTasks(?)`, [JSON.stringify(payload)]);
        console.log(result);
        return result; 
    } catch (error) {
        console.error("Error in assignTaskService:", error);
        throw error;
    }
};


module.exports = { createTaskService,assignTaskService,getTasksService,startTaskService,completeTaskService,getEvalTasksService};
