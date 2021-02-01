// Toggle Dark theme or light theme and remember the preference
const btn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme"),
  btn.classList.add("dark-theme");
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme"),
  btn.classList.toggle("dark-theme");
  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
  });

//responsive logo
let resize = document.querySelector(".logo");

window.addEventListener("resize", function() {
  if (window.innerWidth < 500) {
    resize.classList.add("resize");
  } else {
    resize.classList.remove("resize");
  }
});

function campaignSelector() {
  let nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " toggle";
  } else {
    nav.className = "topnav";
  }
}

// Advanced options switch that will show hidden form inputs when toggled
const checkbox = document.getElementById("advancedOptions");
const hide = document.querySelectorAll(".hide");

checkbox.addEventListener("change", function() {
  if (this.checked) {
    for (var i = 0; i < hide.length; i++) {
      hide[i].classList.remove("display-none");
    }
  } else {
    for (var i = 0; i < hide.length; i++) {
      hide[i].classList.add("display-none");
    }
  }
});



 