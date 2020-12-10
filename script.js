"use strict";
document.getElementById("solution").addEventListener("click", calculateAreaOfSquare);
function calculateAreaOfSquare() {
  let length = document.getElementById("side").value;
  let area = length*length;
  document.getElementById("solution").innerHTML = area + " cm2 ";
}