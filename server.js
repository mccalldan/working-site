//jshint esversion:6

// Packages
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// Content

const homeStartingContent = "";
const aboutContent = "";
const contactContent = "";

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// GET Routes

app.get("/", function(req, res){

  res.render("home", {startingContent:homeStartingContent});


});

app.get("/about", function(req, res){
  res.render("about", {aboutContent:aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent:contactContent});
});



// Localhost

app.listen(process.env.PORT || 3000, function() {
  console.log("Your bird is singing loud and clear.");
});
