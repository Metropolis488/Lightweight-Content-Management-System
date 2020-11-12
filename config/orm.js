var connection = require("../config/connection.js");
// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM "+ tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  admin: function(id, cb) {
    var queryString = "SELECT * FROM blogPost WHERE id = ?"
    var adminId = [id];
    connection.query(queryString, adminId, cb);
  },
  create: function(table, post, title, cb) {
    var query = "INSERT INTO "+ table + " (post, title) VALUES (" + post + ", " + title + ");"
    console.log(query);
    connection.query(query, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },

  delete: function(id, cb) {
    var query = `DELETE FROM blogPost WHERE id=${id};`
    console.log(query);
    connection.query(query, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  }

};
  module.exports = orm;