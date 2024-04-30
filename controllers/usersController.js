const sequelize = require('../config/index')
const UserDetails = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserController ={
    async getUserDetails(req,res){
        try{
            const users = await UserDetails.findAll();
            res.send(200).json(users);
        }
        catch(err){
            console.log("Error in Fetching user details" , err);
            res.send(500);
        }
    },

    async addUser(req, res) {
        try{
            const {username , password_hash} = req.body;
            const password = await bcrypt.hash(password_hash, 10)
            const find =await UserDetails.findOne({
                where: {
                    username: username
                }
            })
            if(find === null){
                const result = await UserDetails.create({
                    username:username,
                    password_hash:password
                })
                res.status(200).json(result)
            }
            else{
                res.status(400).send("User already exists")
            }

        }
        catch(err){
            console.log("Error in add user", err);
        }
    },
    async  loginUser(req, res) {
        try {
          const { username, password_hash } = req.body;
          
          const user = await UserDetails.findOne({ 
            where:{
                username:username  
            }
           });
          if (!user) {
            return res.status(401).send({ error: 'Invalid username or password' });
          }
        //   const isPasswordMatch = await user.comparePassword(password_hash);
          const isPasswordMatched = await bcrypt.compare(password_hash, user.password_hash)
          if (!isPasswordMatched) {
            return res.status(401).send({ error: 'Invalid username or password' });
          }
          const token = jwt.sign({ id: user.id }, '1000');
          res.send({ token });
        } catch (err) {
          console.error(err);
          res.status(500).send({ error: 'Login failed' });
        }
      }
}

module.exports = UserController;