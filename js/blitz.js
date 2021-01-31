//responsive logo
let resize = document.querySelector(".logo");

window.addEventListener("resize", function() {
  if (window.innerWidth < 400) {
    resize.classList.add("resize");
  } else {
    resize.classList.remove("resize");
  }
});

// Responsive nav bar menu
function campainSelector() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " toggle";
    } else {
      x.className = "topnav";
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


console.log(hide)

//  formatter for numbers that should be displayed as currency
let formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

function calculate() {
  week1();
  week2();
  total();
}

const scheduleSelector = document.getElementById("scheduleSelector");
const shiftSelector = document.getElementById("shiftSelector");

function week1() {
  const week = document.getElementById("week1");
  const input = week.querySelectorAll("input");
  let units = input[0].value;
  let apple = input[1].value
  let hours = input[2].value;
  let uph = input[3];
  let hourlyRate = input[4];
  let dialPay = input[5];
  let attendance = input[6];
  let commission = input[7];
  let total = input[8];
  let scheduled = null;

  if (units !== undefined && hours !== undefined) {
    uph.value = (units / hours).toFixed(2);
    dialPay.value = hours * 10.50;

    // Calculates agent's attendance bonus based on FT/PT and Day/Night and at least 97.5%
    if (scheduleSelector.checked == true) {
      scheduled = 20;
      if (hours / scheduled >= 0.975) {
        attendance.value = 1;    
      } else {
        attendance.value = 0;
      }
    } else {
      scheduled = 40;
      if (hours / scheduled >= 0.975) {
        if (shiftSelector.checked == true) {
          attendance.value = 2;
        } else {
          attendance.value = 1;
        }
      } else {
        attendance.value = 0;
      }
    }
  }

  if (attendance.value != 0) {
    if (uph.value >= 0.40) {
      commission.value = 35;
    } else if (uph.value >= 0.33) {
      commission.value = 30;
    } else if (uph.value >= 0.25) {
      commission.value = 25;
    } else if (uph.value >= 0.20) {
      commission.value = 20;
    } else if (uph.value >= 0.13) {
      commission.value = 15;
    } else {
      commission.value = 10;   
    }
  } else {
    commission.value = 0,
    hourlyRate.value = 10.50;
  }

  if (attendance.value >= 1) {
    commission.value = commission.value * hours + apple * 5; 
  }

  attendance.value = attendance.value * hours;
  total.value = parseFloat(dialPay.value) + parseFloat(attendance.value) + parseFloat(commission.value);
  hourlyRate.value = total.value / hours;

  // Formatting values to currency
  hourlyRate.value = formatter.format(hourlyRate.value);
  dialPay.value = formatter.format(dialPay.value);
  attendance.value = formatter.format(attendance.value);
  commission.value = formatter.format(commission.value);
}

function week2() {
  const week = document.getElementById("week2");
  const input = week.querySelectorAll("input");
  let units = input[0].value;
  let apple = input[1].value
  let hours = input[2].value;
  let uph = input[3];
  let hourlyRate = input[4];
  let dialPay = input[5];
  let attendance = input[6];
  let commission = input[7];
  let total = input[8];
  let scheduled = null;

  if (units !== undefined && hours !== undefined) {
    uph.value = (units / hours).toFixed(2);
    dialPay.value = hours * 10.50;

    // Calculates agent's attendance bonus based on FT/PT and Day/Night and at least 97.5%
    if (scheduleSelector.checked == true) {
      scheduled = 20;
      if (hours / scheduled >= 0.975) {
        attendance.value = 1;    
      } else {
        attendance.value = 0;
      }
    } else {
      scheduled = 40;
      if (hours / scheduled >= 0.975) {
        if (shiftSelector.checked == true) {
          attendance.value = 2;
        } else {
          attendance.value = 1;
        }
      } else {
        attendance.value = 0;
      }
    }
  }

  if (attendance.value != 0) {
    if (uph.value >= 0.40) {
      commission.value = 35;
    } else if (uph.value >= 0.33) {
      commission.value = 30;
    } else if (uph.value >= 0.25) {
      commission.value = 25;
    } else if (uph.value >= 0.20) {
      commission.value = 20;
    } else if (uph.value >= 0.13) {
      commission.value = 15;
    } else {
      commission.value = 10;   
    }
  } else {
    commission.value = 0,
    hourlyRate.value = 10.50;
  }

  if (attendance.value >= 1) {
    commission.value = commission.value * hours + apple * 5; 
  }

  attendance.value = attendance.value * hours;
  total.value = parseFloat(dialPay.value) + parseFloat(attendance.value) + parseFloat(commission.value);
  hourlyRate.value = total.value / hours;

  // Formatting values to currency
  hourlyRate.value = formatter.format(hourlyRate.value);
  dialPay.value = formatter.format(dialPay.value);
  attendance.value = formatter.format(attendance.value);
  commission.value = formatter.format(commission.value);
}

function total() {
  const input = document.querySelectorAll("input");
  let total1 = input[11];
  let total2 = input[20];
  let payPeriod = input[21];

  payPeriod.value = parseFloat(total1.value) + parseFloat(total2.value);

  total1.value = formatter.format(total1.value);
  total2.value = formatter.format(total2.value);
  payPeriod.value = formatter.format(payPeriod.value);
}

