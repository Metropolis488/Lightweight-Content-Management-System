var express = require("express");
var router = express.Router();
var blog = require("../models/blogs.js");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  blog.all(function(data) {
    var hbsObject = {
      blogs: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.get("/admin/:id", function(req, res) {
  blog.admin(req.params.id, function(err, data) {
    if (err) throw err;
    console.log(data);
    res.render("admin", data);
  });
});


router.delete("/api/admin/:id", function(req, res){
  var deleted = req.params.id;
  blog.delete(deleted, function(result){
    return result 
  })
})
module.exports = router;