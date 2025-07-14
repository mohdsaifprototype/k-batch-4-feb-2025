$(document).ready(function () {
  $("#btn").click(function () {
    console.log("The type of input is:", $("input").attr("type"));
    console.log("Input placeholder value is:", $("input").attr("placeholder"));
    console.log("Input value is:", $("input").attr("value"));
    console.log("Input value is:", $("input").val());
  });

  $("#btn1").click(function () {
    $("#test1").text("Hello world!");
  });
  $("#btn2").click(function () {
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").click(function () {
    $("#test3").val("Dolly Duck");
  });
});
