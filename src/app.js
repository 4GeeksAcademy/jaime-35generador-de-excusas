/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function getRandomnumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}
function getRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomnumber(min, max);
  return anyArray[random];
}
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector(`#excuse`).innerHTML =
    getRandom(who) +
    "" +
    getRandom(action) +
    "" +
    getRandom(what) +
    "" +
    getRandom(when);
};
