//responsive logo
let resize = document.querySelector(".logo");

window.addEventListener("resize", function() {
  if (window.innerWidth < 450) {
    resize.classList.add("resize");
  } else {
    resize.classList.remove("resize");
  }
});

// Responsive nav bar menu
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
  const input = document.querySelectorAll("input");
  let ogRate = input[3].value;
  let mobile = input[4].value
  let aht = input[5].value;
  let hours = input[6].value;
  let hourlyRate = input[7];
  let dialPay = input[8];
  let attendance = input[9];
  let commission = input[10];
  let total = input[11];
  let scheduled = null;

  if (hours !== undefined) {
    dialPay.value = hours * 11.00;

    // Calculates agent's attendance bonus based on FT/PT and Day/Night and at least 97.5%
    if (scheduleSelector.checked == true) {
      scheduled = 20;
      if (hours / scheduled >= 0.975) {
        attendance.value = 2;    
      } else {
        attendance.value = 0;
      }
    } else {
      scheduled = 40;
      if (hours / scheduled >= 0.975) {
        if (shiftSelector.checked == true) {
          attendance.value = 3;
        } else {
          attendance.value = 2;
        }
      } else {
        attendance.value = 0;
      }
    }
  }

  if (attendance.value != 0) {
    if (aht > 850) {
      commission.value = 0.00;
    } else if (aht >= 800) {
      commission.value = 0.50;
    } else if (aht > 750) {
      commission.value = 1.00;
    } else if (aht >= 700) {
      commission.value = 0.50;
    } else {
      commission.value = 0;   
    }
  } else {
    commission.value = 0,
    hourlyRate.value = 11.00;
  }

  if (attendance.value >= 0) {
    commission.value = commission.value * hours + ogRate * hours + mobile * 25; 
  }
  
console.log(commission.value)

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
  const input = document.querySelectorAll("input");
  let ogRate = input[3].value;
  let mobile = input[12].value
  let aht = input[13].value;
  let hours = input[14].value;
  let hourlyRate = input[15];
  let dialPay = input[16];
  let attendance = input[17];
  let commission = input[18];
  let total = input[19];
  let scheduled = null;



  if (hours !== undefined) {
    dialPay.value = hours * 11.00;

    // Calculates agent's attendance bonus based on FT/PT and Day/Night and at least 97.5%
    if (scheduleSelector.checked == true) {
      scheduled = 20;
      if (hours / scheduled >= 0.975) {
        attendance.value = 2;    
      } else {
        attendance.value = 0;
      }
    } else {
      scheduled = 40;
      if (hours / scheduled >= 0.975) {
        if (shiftSelector.checked == true) {
          attendance.value = 3;
        } else {
          attendance.value = 2;
        }
      } else {
        attendance.value = 0;
      }
    }
  }

  if (attendance.value != 0) {
    if (aht.value > 850) {
      commission.value = 0.00;
    } else if (aht.value >= 800) {
      commission.value = 0.50;
    } else if (aht.value > 750) {
      commission.value = 1.00;
    } else if (aht.value >= 700) {
      commission.value = 0.50;
    } else {
      commission.value = 0;   
    }
  } else {
    commission.value = 0,
    hourlyRate.value = 11.00;
  }

  if (attendance.value >= 2) {
    commission.value = commission.value * hours + ogRate * hours + mobile * 25; 
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
  let total2 = input[19];
  let payPeriod = input[20];

  payPeriod.value = parseFloat(total1.value) + parseFloat(total2.value);

  total1.value = formatter.format(total1.value);
  total2.value = formatter.format(total2.value);
  payPeriod.value = formatter.format(payPeriod.value);
}