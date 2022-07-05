const mongoose = require("mongoose");


let productSchema = new mongoose.Schema({
    name:String,
    tech:String,
     openings:String,
     experience:String,
     salary:String
})


let Product = new mongoose.model("product",productSchema);

module.exports =  Product;