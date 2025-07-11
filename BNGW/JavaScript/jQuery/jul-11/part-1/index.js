$(document).ready(function () {
  $("button").click(function () {
    // $(".box").animate({left: '200px', top: "200px"});
    $(".box")
      .animate({ right: "20px" })
      .animate({ top: "200px" })
      .animate({ right: "320px" })
      .animate({ top: "20px" });
  });
});
