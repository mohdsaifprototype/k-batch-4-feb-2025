/* Selection of the DOM */
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

let dateTime = new Date(2026, 0, 0, 0, 0, 0);

function countDown() {
  let currentTime = new Date();

  day.innerText = Math.floor(
    (dateTime.getTime() - currentTime.getTime()) / (1000 * 60 * 60 * 24)
  );

  hour.innerText =
    (Math.floor((dateTime.getTime() - currentTime.getTime()) / (1000 * 60 * 60)) % 24);

  minute.innerText = Math.floor((dateTime.getTime() - currentTime.getTime()) / (1000 * 60)) % 60;

  second.innerText = Math.floor((dateTime.getTime() - currentTime.getTime()) / (1000)) % 60;
}
countDown()
setInterval(countDown, 1000);
