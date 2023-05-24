// h1Text
const dayMonthYear = document.querySelectorAll(".dayMonthYear");
const inputs = document.querySelectorAll("input");

// INPUTS
const dayInput = document.querySelector(".dayInput");
const monthInput = document.querySelector(".monthInput");
const yearInput = document.querySelector(".yearInput");

// Error Messages
const dayErrorMessage = document.querySelector(".dayErrorMessage");
const monthErrorMessage = document.querySelector(".monthErrorMessage");
const yearErrorMessage = document.querySelector(".yearErrorMessage");

const purpleCircle = document.querySelector(".purpleCircle");

let currentDay;
let currentMonth;
let currentYear;

function getDate() {
  const newDate = new Date();
  currentDay = newDate.getDate();
  currentMonth = newDate.getMonth();
  month++;
  currentYear = newDate.getFullYear();
}

purpleCircle.addEventListener("click", function () {
  removeRed();

  if (dayInput.value === "") {
    dayErrorMessage.textContent = "This field is required";
    dayErrorMessage.style.display = "block";
    makeRed();
  } else {
    dayErrorMessage.style.display = "none";
  }

  if (monthInput.value === "") {
    monthErrorMessage.textContent = "This field is required";
    monthErrorMessage.style.display = "block";
    makeRed();
  } else {
    monthErrorMessage.style.display = "none";
  }

  if (yearInput.value === "") {
    yearErrorMessage.textContent = "This field is required";
    yearErrorMessage.style.display = "block";
    makeRed();
  } else {
    yearErrorMessage.style.display = "none";
  }
});

function makeRed() {
  dayMonthYear.forEach(function (h1Text) {
    h1Text.classList.add("redFont");
  });

  inputs.forEach(function (input) {
    input.classList.add("redBorder");
  });
}

function removeRed() {
  dayMonthYear.forEach(function (h1Text) {
    h1Text.classList.remove("redFont");
  });

  inputs.forEach(function (input) {
    input.classList.remove("redBorder");
  });
}
