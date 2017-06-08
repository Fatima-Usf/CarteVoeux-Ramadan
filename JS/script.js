$(document).ready(function() {
$("#p2").hide();
$("#p3").hide();
$("#msg").hide();

$("#p1").click(function(){
$("#p1").toggle();
$("#p2").toggle();
})


$("#p2").click(function(){
  $("#p2").toggle();

  $("#p3").toggle();
  })

  $("#p3").click(function(){


$('body').css("background-image", "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(Ramadan.jpg)");
  $("#curs").toggle();
    $("#img2").toggle();
      $("#msg").toggle();

})





});
