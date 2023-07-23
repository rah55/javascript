// jshint esversion :6
const express = require("express");
const app = express();
const bodyparser =require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));



app.get("/",function(req,res){
res.sendFile(__dirname +"/bmi.html");
});

app.post("/",function(req,res){
    var weight = Number(req.body.weight);
    var height=Number(req.body.height);
    var bmi = weight / (height * height);

    res.send("The BMI is " + bmi);
})
app.listen(3000,function(){
    console.log("server running successfully");
})
