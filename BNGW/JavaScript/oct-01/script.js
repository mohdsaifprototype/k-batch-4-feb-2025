const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

main.style.minHeight = `calc(100vh - ${header.offsetHeight + footer.offsetHeight}px)`;

/* 
We want to declare a default username and password to login

we use local storage to store the username and password
*/

localStorage.setItem("username", "admin");
localStorage.setItem("password", "admin");

/* Jquery logic */
$(document).ready(function () {
  $("button").click(function () {
    const username = $("input").val();
    const password = $("#pass").val();
    if (username === localStorage.getItem("username") && password === localStorage.getItem("password")) {
      alert("Login successful");
      localStorage.setItem("token", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Login failed");
    }
  });
});