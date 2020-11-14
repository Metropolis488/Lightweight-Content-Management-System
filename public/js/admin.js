$(function() {
    $(".id").on("click", function(event) {
      var id = $(this).data("id");
      var deletePost = {
        id: id
      };
      // Send the PUT request.
      $.ajax("/api/admin/" + id, {
        type: "PUT",
        data: id
      }).then(
        function() {
          console.log("deleted post id", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var newCat = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim()
      };
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    // deleted post updated 11/14
    $(".delete-blogPost").on("click", function(event) {
      var id = $(this).data("id");
      // Send the DELETE request.
      $.ajax("/api/blogPost/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted Blogpost", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });