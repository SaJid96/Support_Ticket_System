const express =require('express')
const path = require('path');
const { erroHandler } = require('./middleware/errorMiddleware')
const dotenv=require('dotenv').config()
const colors=require('colors')
const connectDB = require('./config/db')

const PORT=process.env.PORT || 5000
const app=express()

//connect db
connectDB()


app.use(express.json())
app.use(express.urlencoded({extended:false}))


//Routes
app.use('/api/users',require('./routes/UserRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'));


// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  // FIX: below code fixes app crashing on refresh in deployment
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' })
  })
}




app.use(erroHandler)

app.listen(PORT,()=>{
        console.log(`sERVER STARTED ON ${PORT}`);
})