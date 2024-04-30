const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController')
const {authenticateJWT} = require('../middleware/index')

router.use(express.json());

router.get('/tasks',authenticateJWT, tasksController.getTasks);
router.post('/create-task',authenticateJWT,tasksController.createTask);
router.put('/update-task', authenticateJWT,tasksController.updateTask);
router.delete('/delete-task' ,authenticateJWT, tasksController.deleteTask);


module.exports = router;