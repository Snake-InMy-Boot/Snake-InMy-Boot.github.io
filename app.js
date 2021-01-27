function campainSelector() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " toggle";
    } else {
      x.className = "topnav";
    }
  }

