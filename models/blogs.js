var orm = require("../config/orm.js");
var blogs = {
  all: function (cb) {
    orm.all("blogPost", function (res) {
      cb(res);
    });
  },
  fetch: function(id, cb) {
    orm.fetch(id, function(res){
      cb(res);
    })
  },
  update: function (vals, cb) {
    orm.update(vals, function (res) {
      cb(res);
    });
  },

  create: function(columns, vals, cb) {
    orm.create("blogPost", columns, vals, function(res) {
      cb(res);
    })
  },

  delete: function (id, cb) {
    orm.delete(id, function (res) {
      cb(res);
    });
  },
};

module.exports = blogs;

