const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const registerRoutes = require("./routes/register");
const postRoutes = require("./routes/post");
const createRoutes = require("./routes/create");
const searchRoutes = require("./routes/search");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

//  Dynamic routing
app.get("/blog/:id/batch", (req, res) => {
  res.render("home.ejs", { id: req.params.id });
});

app.use(registerRoutes);
app.use(createRoutes);
app.use(postRoutes);
app.use(searchRoutes);
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(3000, () => {
  console.log("Listening at 3000");
});

mongoose.connect("mongodb://localhost:27017/collegeApp",()=>{
  console.log("connected to db");
})

// npm init
// npm install
// Templating EJS
// Dynamic routing
// MVC
// REST API
// npm i ejs

// Model View             Controller 
// Data  What users sees  Connecting models to views
// Products - id , name ,cost , size
// User - id , name , orders , email , mob no.
// Order - id , user , cost , discount
// Order = [{id:"abc",user:"Mukul",cost:500,discount:10%},{}]

// HTML - EJS,inlcude header and footer
// correct links in header
// Controllers for create.js , register , search