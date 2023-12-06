"use strict";

const buttons = document.querySelector(".buttons");
const btn = document.querySelectorAll("span");
const value = document.getElementById("value");
const toggleButn = document.querySelector(".toggleBtn");
const body = document.querySelector("body");

function updateDisplay(newValue) {
  value.innerHTML = newValue;
}

function performCalculation() {
  updateDisplay(eval(value.innerHTML));
}

function handleButtonClick(buttonText) {
  if (buttonText === "=") {
    performCalculation();
  } else if (buttonText === "Clear") {
    updateDisplay("0");
  } else {
    if (value.innerHTML === "0") {
      updateDisplay(buttonText);
    } else {
      updateDisplay(value.innerHTML + buttonText);
    }
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (/[0-9/*\-+]/.test(key)) {
    handleButtonClick(key);
  } else if (key === "=" || key === "Enter") {
    performCalculation();
  } else if (key === "Clear" || key === "Delete") {
    updateDisplay("0");
  }
});

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    handleButtonClick(this.innerHTML);
  });
}

toggleButn.onclick = function () {
  body.classList.toggle("dark");
};
