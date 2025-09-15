$(document).ready(function () {
  let interval = setInterval(() => {
    let currentDate = new Date();
    $(".container").html(`Current Date and time is:, ${currentDate}`);
    // $(".container").html(`${currentDate.getDay()}`)
  }, 1000);
  $(".btn").click(function () {
    clearInterval(interval);
  });
});

console.log(Date.now());