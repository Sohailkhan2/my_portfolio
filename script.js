const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Python Developer",
  "SQL Developer",
];

let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 100; 
const erasingSpeed = 60; 
const delayBetweenRoles = 1500; 

const typingElement = document.getElementById("typing-text");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(eraseRole, delayBetweenRoles);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, erasingSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeRole, 500);
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyg6-vZRi5XGflOsUemUPYSvgXDGNvW3108C1eOQEnH6XVplIIkbSGIjVUsroyZHJm8/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sen successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
