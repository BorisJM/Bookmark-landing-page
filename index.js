"use strict";

const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const logoImg = document.querySelector(".logo-img");
const socialLinks = document.querySelector(".social-links");
const navBar = document.querySelector(".navbar");
const navList = document.querySelector(".navbar-list");
const tabsContainer = document.querySelector(".tabs-container");
const tabImg = document.querySelector(".tab-img");
const featuresBtnArray = Array.from(document.querySelectorAll(".features-btn"));
const featuresSubHeading = document.querySelector(".features-subheading");
const optionDescription = document.querySelector(".option-description");
const questionsContainer = document.querySelector(".questions-container");
const form = document.querySelector("form");
const input = document.querySelector(".input-email");
const errorMessage = document.querySelector(".error-message");
const errorIcon = document.querySelector(".error-icon");

function toggleNav() {
  navBar.classList.toggle("open");
  closeBtn.classList.toggle("hidden");
  toggleBtn.classList.toggle("hidden");
  socialLinks.classList.toggle("hidden");
  navList.classList.toggle("transform");
}

toggleBtn.addEventListener("click", function () {
  toggleNav();
  logoImg.setAttribute("src", "./images/logo-bookmark-navbar.svg");
});

closeBtn.addEventListener("click", function () {
  toggleNav();
  logoImg.setAttribute("src", "./images/logo-bookmark.svg");
});

// Tabs on click

tabsContainer.addEventListener("click", function (e) {
  if (e.target.closest(".features-btn")) {
    featuresBtnArray.forEach((el) => el.classList.remove("active-tab"));
    const tabNum = +e.target.dataset.tab;
    if (tabNum === 1) {
      featuresSubHeading.textContent = "Bookmark in one click";
      optionDescription.textContent =
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
    }
    if (tabNum === 2) {
      featuresSubHeading.textContent = "Intelligent search";
      optionDescription.textContent = `Our powerful search feature will help you find saved sites in no time at
      all. No need to trawl through all of your bookmarks.`;
    }
    if (tabNum === 3) {
      featuresSubHeading.textContent = "Share your bookmarks";
      optionDescription.textContent = `Easily share your bookmarks and collections with others. Create a
  shareable link that you can send at the click of a button.`;
    }

    e.target.classList.add("active-tab");
    tabImg.setAttribute(
      "src",
      `./images/illustration-features-tab-${tabNum}.svg`
    );
  }
  return;
});

// QUESTIONS
questionsContainer.addEventListener("click", function (e) {
  if (e.target.closest(".button-arrow")) {
    const questionNum = +e.target.dataset.question;
    const answerContainer = e.target.closest(".button-arrow");
    const arrowIcon = answerContainer.querySelector(".arrow-icon");
    arrowIcon.classList.toggle("rotated");
    arrowIcon.querySelector("path").classList.toggle("change-stroke");
    answerContainer.nextSibling.nextSibling.classList.toggle("visibility");
    answerContainer.nextSibling.nextSibling.classList.toggle("slide-down");
  }
});

// Form validation

// checking if email is valid
function ValidateEmail(input) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    input.classList.toggle("error-input");
    errorIcon.classList.toggle("visibility");
    errorMessage.classList.toggle("visibility");

    return true;
  } else {
    input.classList.toggle("error-input");
    errorIcon.classList.toggle("visibility");
    errorMessage.classList.toggle("visibility");
    setTimeout(() => {
      input.classList.toggle("error-input");
      errorIcon.classList.toggle("visibility");
      errorMessage.classList.toggle("visibility");
    }, 3000);
    return false;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  ValidateEmail(input);
});
