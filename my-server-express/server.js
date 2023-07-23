const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("hello");
})
app.get("/contact",function(req,res){
    res.send("please contact on my email address: rahulk03092000@gmail.com");

})

app.get("/about",function(req,res){
    res.send(" I love coding and drawing");
})

app.get("/hobbies",function(req,res){
    res.send("<ul><li>Drawing</li><li>Travelling</li><li>Listening music</li></ul>");
})

app.listen(3000,function(){
    console.log("server is running successfully");
})
