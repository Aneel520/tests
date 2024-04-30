const express = require('express')
const app = express()
const tasksRoute = require('./routes/tasksRoute')
const usersRoute = require('./routes/userRoute')




app.use(express.json()); 

app.use('/users',usersRoute)

app.use('/tasks',tasksRoute)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});