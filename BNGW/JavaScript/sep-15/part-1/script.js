/* Selection of the DOM */
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const amPm = document.querySelector('.amPm');

/* Setting default values to the DOM */
hour.innerText = "HH";
minute.innerText = "MM";
second.innerText = "SS";
amPm.innerText = "AM";
getTime();
/* Calling getTime function every 1000 mille seconds */
setInterval(getTime, 1000);

/* Definition for getting the time */
function getTime() {
  let dateTime = new Date();
  /* To get current hour in 12 hour format */
  hour.innerText = dateTime.getHours() % 12;
  /* To get current minute */
  minute.innerText = dateTime.getMinutes();
  /* To get seconds */
  second.innerText = dateTime.getSeconds();
  /* To get AM or PM */
  amPm.innerText = (dateTime.getHours() > 12) ? "PM" : "AM";
}