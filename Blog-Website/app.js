const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");



const homeStartingContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const aboutContent =" A erat nam at lectus urna duis convallis.Scelerisque varius morbi enim nunc.Tellus pellentesque eu tincidunt tortor.Amet mattis vulputate enim nulla.Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget.Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat.Et netus et malesuada fames ac turpis.Magna fermentum iaculis eu non diam phasellus vestibulum lorem.Purus sit amet volutpat consequat mauris.Varius quam quisque id diam.Bibendum est ultricies integer quis auctor elit sed."
const contactContent = "Nisi scelerisque eu ultrices vitae auctor eu augue ut.Facilisis volutpat est velit egestas dui id ornare.Volutpat odio facilisis mauris sit amet massa.Tincidunt lobortis feugiat vivamus at augue.Volutpat odio facilisis mauris sit amet.Vitae semper quis lectus nulla.Tortor consequat id porta nibh venenatis cras sed felis eget.Purus non enim praesent elementum facilisis leo vel fringilla est.A pellentesque sit amet porttitor.Faucibus ornare suspendisse sed nisi lacus sed viverra tellus.Convallis posuere morbi leo urna.Proin libero nunc consequat interdum varius sit amet mattis.Aenean et tortor at risus viverra adipiscing at."
   
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extende:true}));
app.use(express.static("public"));



app.get("/", function (req, res) {
    res.render("home", { home:homeStartingContent  });
})

app.get("/about",function(req,res){
    res.render("about",{about:aboutContent})
})


app.get("/contact",function(req,res){
    res.render("contact",{contact:contactContent})
})












app.listen(3000, function () {
    console.log("Server is running successfully");
})