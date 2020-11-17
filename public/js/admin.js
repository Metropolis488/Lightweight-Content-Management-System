$(document).ready(function(){
  $(".goTo").on("click", function(e) {
    var id = $(this).data("id");

    console.log(id);
    
    $.ajax("/article/" + id, {
      type: "GET",
    }).then(function() {      
    });
    location.href = "/article/" + id;
  })

})