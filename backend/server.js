const express = require('express')
const app = express()
const dotenv = require('dotenv')
const router = require ('./routes/userRoutes')
dotenv.config()
const bodyParcer = require('body-parser')
app.use(bodyParcer.json({extended:false}))
const cors = require('cors')
app.use(cors())
const connectDB = require('./db/db')
const bcrypt = require('bcryptjs')
connectDB()
app.use('/user',router)

app.listen(process.env.PORT,(err)=>{
    if (err) throw new Error('SERVER NOT CONNECTED')
    console.log('server connected')
})