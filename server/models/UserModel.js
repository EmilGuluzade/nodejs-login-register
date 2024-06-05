const mongoose = require("mongoose")


const userModel=mongoose.model("User", mongoose.Schema({
    name:String,
    email:String,
    password:String

}))


module.exports=userModel