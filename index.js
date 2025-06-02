const express = require('express');
const mongoose  = require('mongoose')
const path = require('path')

const app =  express();

const port = 3000;
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/form')

const db = mongoose.connection;

db.once('open',()=>{
    console.log("Mongo db connected...")
})

 const userSchema =  new mongoose.Schema({
    email:String,
    password:Intl
})

const Users = mongoose.model("data", userSchema)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})


app.post('/post',async(req,res)=>{
    const {email , password} = req.body
     const user = new Users({
        email,
        password
     })
     await user.save();
     console.log(user);
     res.send("Form Submisson Succesfull")
    
})
app.listen(port,()=>{
    console.log("Server Started")
})

