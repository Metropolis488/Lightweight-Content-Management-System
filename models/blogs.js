var orm = require("../config/orm.js");
var blogs = {
  all: function (cb) {
    orm.all("blogPost", function (res) {
      cb(res);
    });
  },
  admin: function (id, cb) {
    orm.admin(id, function (res) {
      cb(res);
    });
  },

  // updated delete req 11/14
  delete: function (id, cb) {
    orm.delete(id, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = blogs;

