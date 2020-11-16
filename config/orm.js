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
      console.log(result);
    });
  },
  fetch: function(id, cb) {
    var query = `SELECT * FROM blogPost WHERE id = ${id};`
    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    })
  },
  update: function(vals, cb) {
    console.log(vals);
    var title = vals[0];
    var post = vals[1];
    var auth = vals[2];
    var abs = vals[3];
    var upID = vals[4];
    var query = `UPDATE blogPost SET title = "${title}", post = "${post}", author = "${auth}", abstract = "${abs}" WHERE id = "${upID}";`
    console.log(query);
    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, columns, values, cb) {
    console.log(values);
    var query = "INSERT INTO "+ table + " (" + columns.join(",") + ") VALUES ('"+ values.join("', '") + "');"
    connection.query(query, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  },

  delete: function(id, cb) {
    var query = `DELETE FROM blogPost WHERE id=${id};`
    connection.query(query, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  }

};
  module.exports = orm;