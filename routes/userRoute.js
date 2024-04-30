const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usersController');

router.use(express.json())

router.get('/users',UserController.getUserDetails);

router.post('/register-user',UserController.addUser);

router.post('/login' , UserController.loginUser);


module.exports = router;