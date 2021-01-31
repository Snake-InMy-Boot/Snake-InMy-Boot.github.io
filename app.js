//responsive logo
let resize = document.querySelector(".logo");

window.addEventListener("resize", function() {
  if (window.innerWidth < 450) {
    resize.classList.add("resize");
  } else {
    resize.classList.remove("resize");
  }
});

function campainSelector() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " toggle";
    } else {
      x.className = "topnav";
    }
  }

