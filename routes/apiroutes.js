var express = require("express");
// let handlebars = require("express-handlebars");
var router = express.Router();


router.get("/api/login", function(req, res) {
    
    console.log(req);
    
   res.status(200).end();
   });



module.exports = router;