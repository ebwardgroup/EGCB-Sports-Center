// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
let handlebars = require("express-handlebars");
var express = require('express');
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"../public/login.html"));
  });

  // cms route loads cms.html
  app.get("/userquestions", function(req, res) {
    res.sendFile(path.join(__dirname,"../public/createUser.html"));
  });

  // blog route loads blog.html
  app.get("/sportscenter/playerinfo", function(req, res){
    res.render("index", );
  })

  app.get("/sportscenter/:id?", function(req, res) {
    db.UserInfo.findOne({
      where: {
        id: req.params.id
      },
    }).then(function(data) {
      console.log(data);
      let hbsObject = {
        burgers: data
      };
      // res.send(hbsObject);
    res.sendFile(path.join(__dirname,"../public/sportscenter.html"));
    

  })
})

app.get("/sportscentergame/:id?", function(req, res){
  res.sendFile(path.join(__dirname,"../public/gamescores.html"));
})

app.get("/sportscenterpref/:id?", function(req, res){
  res.sendFile(path.join(__dirname,"../public/preferences.html"));
})
}