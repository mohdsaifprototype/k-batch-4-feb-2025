$("document").ready(function () {
  $("button[data-check]").click(function () {
    console.log(
      $(this)
        .prevUntil("h6")
        .children("input:checked").val()
    );
  });
});
