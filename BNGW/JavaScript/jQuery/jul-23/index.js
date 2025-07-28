$("document").ready(function () {
  let i = 0;
  $("[data-append]").click(function () {
    // Gathering Data from HTML and storing in the following variable
    let q = $("#q").val();
    let op1 = $("#op1").val();
    let op2 = $("#op2").val();
    let op3 = $("#op3").val();
    let op4 = $("#op4").val();
    // Putting those data into the below string template
    let myQuestDOM = `
  <div id="q${i++}" class="question">
    <!-- Question -->
    <h6>${q}</h6>
    <!-- options -->
    <label><input type="radio" name="q1" value="${op1}"> ${op1}</label>
    <label><input type="radio" name="q1" value="${op2}"> ${op2}</label>
    <label><input type="radio" name="q1" value="${op3}"> ${op3}</label>
    <label><input type="radio" name="q1" value="${op4}"> ${op4}</label>
    <!-- Buttons -->
    <button data-check class="btn btn-secondary" type="button">Check Answer</button>
  </div>
  `;
  // Finally appending the question using the above string template
    $(".quiz").append(myQuestDOM);
  });

  // $("button[data-check]").click(function () {
  //   console.log(
  //     $(this)
  //       .prevUntil("h6")
  //       .children("input:checked").val()
  //   );
  // });
});

/* 
To underestand the above code refer to String Template aka Template litral.
*/
