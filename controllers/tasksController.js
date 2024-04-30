const TaskDetails = require('../models/tasksModel')


const tasksController = {
    async getTasks(req, res) {
        try {
            const result = await TaskDetails.findAll()
            res.status(200).json(result);
        } catch (error) {
            console.error('Error retrieving tasks:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    async createTask(req, res) {
        try{
            const {title , description, status, assignee_id} = req.body;
            const result = await TaskDetails.create({
                status:status,
                description:description,
                assignee_id:assignee_id,
                title:title
            })
            res.status(200).send("Create task successfully");
        }
        catch(err){
            console.log("Error in create task" , err);
            res.status(500);
        }
    },
        
    async updateTask(req, res) {
        try{
            const {assignee_id , status} = req.body;
            const result = await TaskDetails.update({
                status:status
            },
            {
            where:{
                assignee_id:assignee_id
            }
            });
            res.status(200).send("task updated successfully");
        }
        catch(err){
            console.log("Error  in updating task details" , err);
        }
    },

    async deleteTask(req, res) {
        try{
            const {id} = req.body;
            const task = await TaskDetails.findByPk(id);
            if(task !== null){
                await task.destroy();
                res.status(200).json({ message: 'Task deleted successfully' });
            }
            else{
                return res.status(404).json({ error: 'Task not found' });
            }
        }
        catch(err){
            console.error('Error deleting task:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = tasksController;
