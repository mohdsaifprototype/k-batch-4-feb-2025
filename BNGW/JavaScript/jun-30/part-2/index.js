const img = document.querySelector('.img');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const bg1 = "no-repeat url(assets/fan-on.gif) center center/contain";
const bg2 = "no-repeat url(assets/fan-off.jpg) center center/contain";

function fanOn() {
  img.style.background = bg1;
  btn1.toggleAttribute("hidden");
  btn2.toggleAttribute("hidden");
}

function fanOff() {
  img.style.background = bg2;
  btn1.toggleAttribute("hidden");
  btn2.toggleAttribute("hidden");
}
// btn.innerText = "Fan off"

/* Event handling using JavaScript */
btn1.addEventListener("click", fanOn);

// btn1.removeEventListener(fanon);

btn2.addEventListener("click", fanOff);