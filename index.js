const express = require("express");
const app = express();
require("./db/config")
const User = require("./db/user")
const cors = require("cors")
const Product = require("./db/product")

const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.send("hello mahesh")
})


app.post("/register", async (req, res) => {

    let result = await new User(req.body);
    result = await result.save();
    result = result.toObject()
    delete result.password;
    res.send(result)

})

app.post("/login", async (req, res) => {
    try {
        if (req.body.password && req.body.email) {
            let result = await User.findOne(req.body).select("-password");
            if (result) {
                res.send(result)
            } else {
                res.send({ result: "user not found" })
            }
        } else {
            res.send({ result: "user not found" })
        }
    } catch (e) {
        res.send(e)
    }
})


app.post("/addproduct",async(req,res)=>{
    let result = await Product(req.body);
    result = await result.save();
    // result = await result.json();
    res.send(result)
})


app.get("/product",async(req,res)=>{
let result = await Product.find({});
res.send(result)
})

app.delete("/product/:id",async(req,res)=>{
let result = await Product.deleteOne({_id:req.params.id})
res.send(result)
})

app.put("/product/:id",async(req,res)=>{
    let result = await Product.updateOne({_id:req.params.id},{$set:req.body})
    res.send(result)
})

app.get("/product/:id",async(req,res)=>{
    let result = await Product.findOne({_id:req.params.id})
    res.send(result)
})

app.get("/search/:key",async(req,res)=>{
    let key = req.params.key;
result = await Product.find({
    "$or":[
        {name:{$regex:key}},
        {tech:{$regex:key}}
    ]
})
res.send(result)
})

app.get("/sortAsc/",async(req,res)=>{
        let result = await Product.find({}).sort({salary:1})
    res.send(result)    
})

app.get("/sortDsc/",async(req,res)=>{
    let result = await Product.find({}).sort({salary:-1})
res.send(result)    
})

if(process.env.NODE_ENV = "production"){
    app.use(express.static("client/build"));
}

app.listen(port, () => {
    console.log(`listning on port ${port}`)
})