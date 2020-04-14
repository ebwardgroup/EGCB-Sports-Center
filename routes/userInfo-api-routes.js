var db = require("../models");
let handlebars = require("express-handlebars");
var express = require('express');
// var teamcolor = require('../NBATEAM/color1.js');
const teamlocations = require("../NBATEAM/findpng.js");
const path = require('path');
const getColors = require('get-image-colors');
let colorarray15 =[];
// let teamstring = require('./string.js');

//POST route for saving new user info
module.exports = function(app) {
    app.post("/api/userInfo", function(req, res) {
      console.log(req)
        db.UserInfo.create({
          UserID: req.body.UserID,
          Email: req.body.Email,
          UserPassword: req.body.UserPassword,
          FavTeam: req.body.FavTeam
        }).then(function(dbuserInfo) {
          res.json(dbuserInfo)
        })
            
        });
        app.get("/api/login", function(req, res){
          console.log(req.query.UserID);
          db.UserInfo.findOne({
            where: {
              UserID: req.query.UserID,
              UserPassword: req.query.UserPassword
            },
          }).then(function(dbuserInfo) {
            // console.log(dbuserInfo);
          if(dbuserInfo == null){

          }
          else{
            res.json(dbuserInfo.id);
            //  res.redirect("/sportscenter/"+ dbuserInfo.id);
            // res.render("index");
            
          };
          });
        });
        app.get("/api/home/:id?", function(req, res){

          db.UserInfo.findOne({
            where: {
              id: req.params.id
            },
          }).then(function(data) {
            let teamstring = data.FavTeam;  
            let teamstring1 = teamlocations[teamstring];
            

            let currentteam = "../NBATEAM/NBAlogos/" + teamstring1[0] +".png";
            console.log(currentteam);
            let currentteamonlineurl = teamstring1[1];
            getColors(path.join(__dirname, currentteam)).then(colors => {
                
               colorarray = colors.map(color => color.hex());
               console.log(colorarray);
               colorarray15 =[];
              colorarray.forEach(element => {
                  colorarray15.push(element);
              });
            });
               
            let teamobj ={
                   colors1: colorarray15,
                   url: currentteamonlineurl
                }

            let infoobject = {
              db: data,
              color: teamobj
            }
            console.log(infoobject);
            // res.sendFile(teamcolor.url);
            // res.sendFile(teamcolor.url);
            res.send(infoobject);
          
          });
        });
};
