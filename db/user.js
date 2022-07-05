const mongoose = require("mongoose");


let userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
})

// export default mongoose.model("User",UserSchema)


module.exports = mongoose.model("user",userSchema)