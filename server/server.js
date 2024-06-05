const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const userModel = require("./models/UserModel")

const app = express()


app.use(express.json())
app.use(cors())


app.post("/register", (req, res) => {
    userModel.create({ ...req.body }).then(user => res.json(user)).catch(err => res.json(err))
})
app.post("/login", (req, res) => {
    const {email,password}=req.body
    userModel.findOne({ email,password })
    .then(user=>{
        if(user){
            if(user.password==password){
                res.json("succsess")
            }else{
                res.json("it is not correct password")
            }
        }else{
                res.json("User not exist")
            }
    })
})



mongoose.connect(process.env.DB).then((req) => {
    console.log("DB connected")

})
app.listen(process.env.PORT, (req, res) => {
    console.log("Port Listening")
})