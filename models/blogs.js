var orm = require("../config/orm.js");
var blogs = {
  all: function (cb) {
    orm.all("blogPost", function (res) {
      cb(res);
    });
  },
  admin: function (id, cb) {
    orm.admin({ id }, function (res) {
      cb(res);
    });
  },

  delete: function (cb) {
    orm.delete("blogPost", function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = blogs;

