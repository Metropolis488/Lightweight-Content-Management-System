$(document).ready(function() {

  $(".goTo").on("click", function(e) {
    var id = $(this).data("id");
    
    $.ajax("/article/" + id, {
      type: "GET",
    }).then(function() {      
    });
    location.href = "/article/" + id;
  });

  $("#updated").on("submit", function(e) {
    e.preventDefault();
    var postC = quill.root.innerHTML;
    var updatedPost = {
      title: $("#updated [name=title").val().trim(),
      post: postC,   
      // post: $("#updated [name=postBody").val().trim(),      
      author: $("#updated [name=author").val().trim(),
      abstract: $("#updated [name=abstract").val().trim(),
      id: $("#updated [name=postID]").text()
    };
    console.log($("#newPost [name=postID]").text());
    $.ajax("/admin/api/updated", {
      type: "POST",
      data: updatedPost
    }).then(function() {
      // location.reload();
      location.href = "/admin"
    })
  });

  $("#newPost").on("submit", function(e) {
    e.preventDefault();

    var postB = quill.root.innerHTML;
    var newArticle = {
      title: $("#newPost [name=title").val().trim(),
      // post: $("#newPost [name=postBody").val().trim(),    
      post: postB,      
      author: $("#newPost [name=author").val().trim(),
      abstract: $("#newPost [name=abstract").val().trim(),      
    };
    $.ajax("/admin/api/new", {
      type: "POST",
      data: newArticle
    }).then(function() {
      console.log("new post created");
      location.reload();
    })
  })

  $(".delete").on("click", function(event) {
      var id = $(this).data("id");
      // Send the DELETE request.
      $.ajax("admin/api/" + id, {
        type: "DELETE"
      }).then(function() {
          console.log("deleted Blogpost", id);
          location.reload();
        }
      );
    });

  $(".update").on("click", function() {
    var id = $(this).data("id");
    $.ajax("/admin/" + id, {
      type: "POST"
    }).then(function() {
    })
    location.href = "/admin/" + id;
  });

});