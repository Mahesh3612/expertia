const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mahesh:mahesh@cluster0.8aap4sx.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("connected to db"))
.catch((e)=>console.log(e))


