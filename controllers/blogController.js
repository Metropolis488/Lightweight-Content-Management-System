var express = require("express");
var router = express.Router();
var blog = require("../models/blogs.js");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  blog.all(function(data) {
    var hbsObject = {
      blogs: data
    };
    res.render("index", hbsObject);
  });
});

router.get("/article/:id", function(req, res) {
  blog.fetch(req.params.id, function(data) {
    var postBody = {
      post: data[0]
    }
    res.render("article", postBody);
  });
});

router.get("/admin", function(req, res) {
  blog.all(function(data) {
    var hbsObject = {
      blogs: data
    };
    res.render("admin", hbsObject);
  });
});

router.get("/admin/:id", function(req, res) {
  blog.fetch(req.params.id, function(data) {
    var postBody = {
      post: data[0]
    }
    res.render("update", postBody);
  });
});

router.post("/admin/api/new", function(req, res) {
  blog.create(["title", "post", "author", "abstract"], [req.body.title, req.body.post, req.body.author, req.body.abstract], function(result) {
    res.json(result);
  })
})

router.post("/admin/api/updated", function(req, res) {
  blog.update([req.body.title, req.body.post, req.body.author, req.body.abstract, req.body.id], function(result) {
    res.json(result);
  })
})

router.delete("/admin/api/:id", function(req, res){
  var deleted = req.params.id;
  blog.delete(deleted, function(result){
    res.json(result);
  })
})
module.exports = router;