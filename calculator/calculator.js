//jshint esversion:6

const bodyparser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname +"/calculator.html"); 
    // __dirname is used for know the path of File.
})

app.post("/",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The Result of the number is " + result);
})



app.listen(3000,function(){
    console.log("server start successfully");
});