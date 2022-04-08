const express =require('express')
const { erroHandler } = require('./middleware/errorMiddleware')
const dotenv=require('dotenv').config()
const colors=require('colors')
const connectDB = require('./config/db')

const PORT=process.env.PORT || 8000
const app=express()

//connect db
connectDB()


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{

    res.status(200).json(`message:welcome to support desk api`)
})

//Routes
app.use('/api/users',require('./routes/UserRoutes'))
app.use(erroHandler)

app.listen(PORT,()=>{
        console.log(`sERVER STARTED ON ${PORT}`);
})