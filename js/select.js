//  formatter for numbers that should be displayed as currency
let formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

function calculate() {
  function week1() {
    const scheduleSelector = document.getElementById("scheduleSelector");
    const shiftSelector = document.getElementById("shiftSelector");
    const week = document.getElementById("week1");
    const input = week.querySelectorAll("input");
    let units = input[0].value;
    let select = input[1].value;
    let apple = input[2].value;
    let hours = input[3].value;
    let uph = input[4];
    let hourlyRate = input[5];
    let dialPay = input[6];
    let attendance = input[7];
    let commission = input[8];
    let total = input[9];
    let scheduled = null;
    const over200 =  units - Math.ceil(hours * 0.50)
    
    if (units !== undefined && hours !== undefined) {
      uph.value = (units / hours).toFixed(2);
      dialPay.value = hours * 10;
    
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
      if (uph.value >= 0.50) {
        commission.value = 8.95 + over200 * 5 / hours;
      } else if (uph.value >= 0.48) {
        commission.value = 7.70; 
      } else if (uph.value >= 0.45) {
        commission.value = 6.45; 
      } else if (uph.value >= 0.43) {
        commission.value = 5.05; 
      } else if (uph.value >= 0.40) {
        commission.value = 4.50; 
      } else if (uph.value >= 0.38) {
        commission.value = 4.05;
      } else if (uph.value >= 0.35) {
        commission.value = 3.15;
      } else if (uph.value >= 0.33) {
        commission.value = 3.00; 
      } else if (uph.value >= 0.30) {
        commission.value = 2.90;
      } else if (uph.value >= 0.28) {
        commission.value = 2.75;
      } else if (uph.value >= 0.25) {
        commission.value = 2.65;
      } else {
        commission.value = 0;  
      }
    } else {
        commission.value = 0,
        hourlyRate.value = 10;
    }
    
    if (attendance.value >= 1) {
    commission.value = commission.value * hours + apple * 5 + select * 7; 
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
    const scheduleSelector = document.getElementById("scheduleSelector");
    const shiftSelector = document.getElementById("shiftSelector");
    const week = document.getElementById("week2");
    const input = week.querySelectorAll("input");
    let units = input[0].value;
    let select = input[1].value;
    let apple = input[2].value;
    let hours = input[3].value;
    let scheduled = null;
    let uph = input[4];
    let hourlyRate = input[5];
    let dialPay = input[6];
    let attendance = input[7];
    let commission = input[8];
    let total = input[9];
    const over200 =  units - Math.ceil(hours * 0.50)
    
    if (units !== undefined && hours !== undefined) {
      uph.value = (units / hours).toFixed(2);
      dialPay.value = hours * 10;
    
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
      if (uph.value >= 0.50) {
        commission.value = 8.95 + over200 * 5 / hours;
      } else if (uph.value >= 0.48) {
        commission.value = 7.70; 
      } else if (uph.value >= 0.45) {
        commission.value = 6.45; 
      } else if (uph.value >= 0.43) {
        commission.value = 5.05; 
      } else if (uph.value >= 0.40) {
        commission.value = 4.50; 
      } else if (uph.value >= 0.38) {
        commission.value = 4.05;
      } else if (uph.value >= 0.35) {
        commission.value = 3.15;
      } else if (uph.value >= 0.33) {
        commission.value = 3.00; 
      } else if (uph.value >= 0.30) {
        commission.value = 2.90;
      } else if (uph.value >= 0.28) {
        commission.value = 2.75;
      } else if (uph.value >= 0.25) {
        commission.value = 2.65;
      } else {
        commission.value = 0;  
      }
    } else {
      commission.value = 0,
      hourlyRate.value = 10;
    }
    
    if (attendance.value >= 1) {
      commission.value = commission.value * hours + apple * 5 + select * 7; 
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
      let total1 = input[12];
      let total2 = input[22];
      let payPeriod = input[23];
     
      payPeriod.value = parseFloat(total1.value) + parseFloat(total2.value);
    
      total1.value = formatter.format(total1.value);
      total2.value = formatter.format(total2.value);
      payPeriod.value = formatter.format(payPeriod.value);
    }
}


