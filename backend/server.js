const express =require('express')
const dotenv=require('dotenv').config()
const PORT=process.env.PORT || 8000
const app=express()

app.listen(PORT,()=>{
        console.log(`sERVER STARTED ON ${PORT}`);
})