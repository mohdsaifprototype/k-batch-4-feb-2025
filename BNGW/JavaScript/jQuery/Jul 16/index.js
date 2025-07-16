const li = `<li>inserted item</li>`;
$("document").ready(function () {
  $("#btn1").click(function () {
    $("ol").append(li); // insert element as last element child
  });

  $("#btn3").click(function () {
    $("#message").before('<span class="bigger">🤦‍♀️</span>'); // insert element as previous element sibling
  });

  $("#btn4").click(function () {
    $("#message").after('<span class="bigger">🤦‍♂️</span>'); // insert element as next element sibling
  });

  $("#width").change(function () {
    $('#div1').css("width", $("#width").val()*5);
  });
  $("#height").change(function () {
    $('#div1').css("height", $("#height").val());
  });
});
