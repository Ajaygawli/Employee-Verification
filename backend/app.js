const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require("cors");
const registerationRoute= require('./routes/registerationRoute')
const adminRoutes= require('./routes/AdminRoutes')
const userRoutes= require('./routes/userRoutes')
app.use(express.json());
app.use(cors());

const dburl = process.env.db_url || 'mongodb://localhost:27017/employeeverify'

// console.log(dburl)


app.use('/register', registerationRoute)
app.use('/api/admin', adminRoutes)
app.use('/api/user', userRoutes)
try {
    mongoose.connect(dburl).then(() => {
        console.log("Connected to DB");
        app.listen(5000, () => {
            console.log("App is running ...")
        })
    })

} catch (error) {
    console.log(error)
}

