var config = require("./config.json");

var mysql = require("mysql");

var Sequelize = require("sequelize");

var sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, config.development);


/* var testConnection = connection.development;

var ericVariable = mysql.createConnection({testConnection});

console.log(testConnection)
// Make connection.
ericVariable.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
}); */
// Export connection for our ORM to use.

module.exports = {sequelize:sequelize}; 
