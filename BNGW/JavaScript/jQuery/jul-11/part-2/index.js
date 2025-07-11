$(document).ready(function () {
  $("#text").click(function () {
    alert("Text Data: " + $(".container").text());
  });
  
  $("#html").click(function () {
    alert("Text Data: " + $(".container").html());
  })

  $("#val").click(function () {
    alert("Your name is: " + $("input").val());
  })
});
