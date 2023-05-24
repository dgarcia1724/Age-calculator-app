// h1Text
const dayMonthYear = document.querySelectorAll(".dayMonthYear");
const inputs = document.querySelectorAll("input");

// INPUTS
const dayInput = document.querySelector(".dayInput");
const monthInput = document.querySelector(".monthInput");
const yearInput = document.querySelector(".yearInput");

// SPANS
const spanYears = document.querySelector(".spanYears");
const spanMonths = document.querySelector(".spanMonths");
const spanDays = document.querySelector(".spanDays");

// Error Messages
const dayErrorMessage = document.querySelector(".dayErrorMessage");
const monthErrorMessage = document.querySelector(".monthErrorMessage");
const yearErrorMessage = document.querySelector(".yearErrorMessage");

const purpleCircle = document.querySelector(".purpleCircle");

purpleCircle.addEventListener("click", function () {
  const newDate = new Date();
  let currentDay;
  let currentMonth;
  let currentYear;

  currentDay = newDate.getDate();
  currentMonth = newDate.getMonth() + 1;
  currentYear = newDate.getFullYear();

  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  removeRed();

  let ready = true;
  let chosenMonth = monthInput.value;
  // month logic
  if (chosenMonth === "") {
    monthErrorMessage.textContent = "This field is required";
    monthErrorMessage.style.display = "block";
    makeRed();
    ready = false;
  } else if (chosenMonth > 12) {
    monthErrorMessage.textContent = "Must be a valid month";
    monthErrorMessage.style.display = "block";
    makeRed();
    ready = false;
  } else {
    monthErrorMessage.style.display = "none";
  }
  // day logic
  if (dayInput.value === "") {
    dayErrorMessage.textContent = "This field is required";
    dayErrorMessage.style.display = "block";
    makeRed();
    ready = false;
  } else if (dayInput.value > months[chosenMonth - 1]) {
    dayErrorMessage.textContent = "Must be a valid day";
    dayErrorMessage.style.display = "block";
    ready = false;
  } else {
    dayErrorMessage.style.display = "none";
  }

  // year logic
  if (yearInput.value === "") {
    yearErrorMessage.textContent = "This field is required";
    yearErrorMessage.style.display = "block";
    makeRed();
    ready = false;
  } else if (yearInput.value > currentYear) {
    yearErrorMessage.textContent = "Must be in the past";
    yearErrorMessage.style.display = "block";
    makeRed();
    ready = false;
  } else {
    yearErrorMessage.style.display = "none";
  }

  // calculate age
  let correctYear = currentYear - yearInput.value;
  let correctMonth;
  let correctDay;

  if (currentDay < dayInput.value) {
    currentDay += 31;
    currentMonth -= 1;
  }
  correctDay = currentDay - dayInput.value;

  if (currentMonth < chosenMonth) {
    currentMonth += 12;
    correctYear -= 1;
  }
  correctMonth = currentMonth - chosenMonth;

  if (ready) {
    spanYears.textContent = correctYear;
    spanMonths.textContent = correctMonth;
    spanDays.textContent = correctDay;
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
