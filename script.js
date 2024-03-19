"use strict";

const convertedTempValue = document.querySelector(".display-value");
const cDegreeType = document.querySelector(".C-F");
const fDegreeType = document.querySelector(".F-C");
const input = document.querySelector(".input");
const btnConvert = document.querySelector(".convert");
let type;
let c;
const activeDegreeType = function () {
  cDegreeType.addEventListener("click", function () {
    type = "celsius";
  });
  fDegreeType.addEventListener("click", function () {
    type = "fahrenheit";
  });
  if (type === "celsius") {
    fDegreeType.style.opacity = 0.2;
    cDegreeType.style.opacity = 1;
  } else if (type === "fahrenheit") {
    cDegreeType.style.opacity = 0.5;
    fDegreeType.style.opacity = 1;
  }
};

setInterval(activeDegreeType, 100);

const calcDegrees = function (n) {
  n = input.value;
  if (type === "celsius") {
    c = (9 / 5) * n + 32;

    convertedTempValue.innerHTML = `${c.toFixed(1)} F &deg`;
  } else if (type === "fahrenheit") {
    c = (5 / 9) * (n - 32);
    convertedTempValue.innerHTML = `${c.toFixed(1)} C &deg`;
  }
  activeDegreeType();
};

btnConvert.addEventListener("click", calcDegrees);
