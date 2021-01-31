//responsive logo
let resize = document.querySelector(".logo");

window.addEventListener("resize", function() {
  if (window.innerWidth < 450) {
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

