function openCampaign(evt, campaignName) {
  // Declare all letiables
  let i, tabcontent, tablinks;
  
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(campaignName).style.display = "block";
  evt.currentTarget.className += " active";
}

function findSelectUPH () {
  // Calculates the agents rates for week 1

  let units1 = document.getElementById("units1");
  let hours1 = document.getElementById("hours1");
  let uph1 = document.getElementById("uph1");
  let hourlyRate1 = document.getElementById("hourlyRate1");
  let dialPay1 = document.getElementById("dialPay1");
  let attendanceBonus1 = document.getElementById("attendanceBonus1"); 
  let commission1 = document.getElementById("commission1"); 
  let total1 = document.getElementById("total1");
  let pt = document.getElementById("checkbox1");
  let nite = document.getElementById("checkbox2");
  let scheduled1 = null;

  // Curreancy foramtter for calculator
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  
  if (units1.value != 0 && hours1.value != 0) {
    uph1.value = (units1.value/hours1.value).toFixed(2)
    dialPay1.value = (hours1.value * 10).toFixed(2)

    // Calculates agent's attendance bonus based on FT/PT and Day/Night and at least 97.5%
    if (pt.checked == true) {
      scheduled1 = 20;
      if (parseFloat(hours1.value) / scheduled1 >= 0.975) {
        attendanceBonus1.value = 1;    
      } else {
        attendanceBonus1.value = 0;
      }
    } else {
      scheduled1 = 40;
      if (parseFloat(hours1.value) / scheduled1 >= 0.975) {
        if (nite.checked == true) {
          attendanceBonus1.value = 2;
        } else {
          attendanceBonus1.value = 1;
        }
      } else {
        attendanceBonus1.value = 0;
      }
    }

    // Calculates the commssion tier the agent achieved based on UPH
    if (attendanceBonus1 != 0) {
      if (uph1.value >= 0.50) {
        commission1.value = 8.95,
        hourlyRate1.value = (dialPay1.value / hours1.value + parseFloat(commission1.value) + parseFloat(attendanceBonus1.value)).toFixed(2); 
      } else if (uph1.value >= 0.48) {
        commission1.value = 7.70,
        hourlyRate1.value = (dialPay1.value / hours1.value + parseFloat(commission1.value) + parseFloat(attendanceBonus1.value)).toFixed(2); 
      } else if (uph1.value >= 0.45) {
        commission1.value = 6.45,
        hourlyRate1.value = (dialPay1.value / hours1.value + parseFloat(commission1.value) + parseFloat(attendanceBonus1.value)).toFixed(2); 
      } else if (uph1.value >= 0.43) {
        commission1.value = 5.05,
        hourlyRate1.value = (dialPay1.value / hours1.value + parseFloat(commission1.value) + parseFloat(attendanceBonus1.value)).toFixed(2); 
      } else if (uph1.value >= 0.40) {
        commission1.value = 4.50,
        hourlyRate1.value = (dialPay1.value / hours1.value + parseFloat(commission1.value) + parseFloat(attendanceBonus1.value)).toFixed(2); 
      } else if (uph1.value >= 0.38) {
        commission1.value = 4.05,
        hourlyRate1.value = (dialPay1.value / hours1.value + parseFloat(commission1.value) + parseFloat(attendanceBonus1.value)).toFixed(2); 
      } else if (uph1.value >= 0.35) {
        commission1.value = 3.15,
        hourlyRate1.value = (dialPay1.value / hours1.value + parseFloat(commission1.value) + parseFloat(attendanceBonus1.value)).toFixed(2); 
      } else if (uph1.value >= 0.33) {
        commission1.value = 3.00,
        hourlyRate1.value = (dialPay1.value / hours1.value + parseFloat(commission1.value) + parseFloat(attendanceBonus1.value)).toFixed(2); 
      } else if (uph1.value >= 0.30) {
        commission1.value = 2.90,
        hourlyRate1.value = (dialPay1.value / hours1.value + parseFloat(commission1.value) + parseFloat(attendanceBonus1.value)).toFixed(2); 
      } else if (uph1.value >= 0.28) {
        commission1.value = 2.75,
        hourlyRate1.value = (dialPay1.value / hours1.value + parseFloat(commission1.value) + parseFloat(attendanceBonus1.value)).toFixed(2); 
      } else if (uph1.value >= 0.25) {
        commission1.value = 2.65,
        hourlyRate1.value = (dialPay1.value / hours1.value + parseFloat(commission1.value) + parseFloat(attendanceBonus1.value)).toFixed(2); 
      } else {
        commission1.value = 0,
        hourlyRate1.value = (dialPay1.value / hours1.value + parseFloat(commission1.value) + parseFloat(attendanceBonus1.value)).toFixed(2); 
      }
    } else {
      commission1.value = 0,
      hourlyRate1.value = 10;
    }

    attendanceBonus1.value = (attendanceBonus1.value * hours1.value).toFixed(2)
    commission1.value = (commission1.value * hours1.value).toFixed(2)
    total1.value = parseFloat(dialPay1.value) + parseFloat(attendanceBonus1.value) + parseFloat(commission1.value)
  }

// Calculates the agents rates for week 2
  let units2 = document.getElementById("units2");
  let hours2 = document.getElementById("hours2");
  let uph2 = document.getElementById("uph2");
  let hourlyRate2 = document.getElementById("hourlyRate2");
  let dialPay2 = document.getElementById("dialPay2");
  let attendanceBonus2 = document.getElementById("attendanceBonus2"); 
  let commission2 = document.getElementById("commission2"); 
  let total2 = document.getElementById("total2");
  let scheduled2 = null;
  let payPeriod = document.getElementById("payPeriod");


  if (units2.value != 0 && hours2.value != 0) {
    uph2.value = (units2.value/hours2.value).toFixed(2)
    dialPay2.value = (hours2.value * 10).toFixed(2)

    // Calculates agent's attendance bonus based on FT/PT and Day/Night and at least 97.5%
    if (pt.checked == true) {
      scheduled2 = 20;
      if (parseFloat(hours2.value) / scheduled2 >= 0.975) {
        attendanceBonus2.value = 1;    
      } else {
        attendanceBonus2.value = 0;
      }
    } else {
      scheduled2 = 40;
      if (parseFloat(hours2.value) / scheduled2 >= 0.975) {
        if (nite.checked == true) {
          attendanceBonus2.value = 2;
        } else {
          attendanceBonus2.value = 1;
        }
      } else {
        attendanceBonus2.value = 0;
      }
    }

    // Calculates the commssion tier the agent achieved based on UPH
    if (attendanceBonus2.value != 0) {
      if (uph1.value >= 0.50) {
        commission2.value = 8.95,
        hourlyRate2.value = (dialPay2.value / hours2.value + parseFloat(commission2.value) + parseFloat(attendanceBonus2.value)).toFixed(2); 
      } else if (uph2.value >= 0.48) {
        commission2.value = 7.70,
        hourlyRate2.value = (dialPay2.value / hours2.value + parseFloat(commission2.value) + parseFloat(attendanceBonus2.value)).toFixed(2); 
      } else if (uph2.value >= 0.45) {
        commission2.value = 6.45,
        hourlyRate2.value = (dialPay2.value / hours2.value + parseFloat(commission2.value) + parseFloat(attendanceBonus2.value)).toFixed(2); 
      } else if (uph2.value >= 0.43) {
        commission2.value = 5.05,
        hourlyRate2.value = (dialPay2.value / hours2.value + parseFloat(commission2.value) + parseFloat(attendanceBonus2.value)).toFixed(2); 
      } else if (uph2.value >= 0.40) {
        commission2.value = 4.50,
        hourlyRate2.value = (dialPay2.value / hours2.value + parseFloat(commission2.value) + parseFloat(attendanceBonus2.value)).toFixed(2); 
      } else if (uph2.value >= 0.38) {
        commission2.value = 4.05,
        hourlyRate2.value = (dialPay2.value / hours2.value + parseFloat(commission2.value) + parseFloat(attendanceBonus2.value)).toFixed(2); 
      } else if (uph2.value >= 0.35) {
        commission2.value = 3.15,
        hourlyRate2.value = (dialPay2.value / hours2.value + parseFloat(commission2.value) + parseFloat(attendanceBonus2.value)).toFixed(2); 
      } else if (uph2.value >= 0.33) {
        commission2.value = 3.00,
        hourlyRate2.value = (dialPay2.value / hours2.value + parseFloat(commission2.value) + parseFloat(attendanceBonus2.value)).toFixed(2); 
      } else if (uph2.value >= 0.30) {
        commission2.value = 2.90,
        hourlyRate2.value = (dialPay2.value / hours2.value + parseFloat(commission2.value) + parseFloat(attendanceBonus2.value)).toFixed(2); 
      } else if (uph2.value >= 0.28) {
        commission2.value = 2.75,
        hourlyRate2.value = (dialPay2.value / hours2.value + parseFloat(commission2.value) + parseFloat(attendanceBonus2.value)).toFixed(2); 
      } else if (uph2.value >= 0.25) {
        commission2.value = 2.65,
        hourlyRate2.value = (dialPay2.value / hours2.value + parseFloat(commission2.value) + parseFloat(attendanceBonus2.value)).toFixed(2); 
      } else {
        commission2.value = 0,
        hourlyRate2.value = (dialPay2.value / hours2.value + parseFloat(commission2.value) + parseFloat(attendanceBonus2.value)).toFixed(2);  
      }
    } else {
    commission2.value = 0,
    hourlyRate2.value = 10;
    }

    attendanceBonus2.value = (attendanceBonus2.value * hours2.value).toFixed(2)
    commission2.value = (commission2.value * hours2.value).toFixed(2)
    total2.value = parseFloat(dialPay2.value) + parseFloat(attendanceBonus2.value) + parseFloat(commission2.value)
  }

  payPeriod.value = parseFloat(total1.value) + parseFloat(total2.value)

  // Formatting values to currency
  hourlyRate1.value = formatter.format(hourlyRate1.value)
  dialPay1.value = formatter.format(dialPay1.value)
  attendanceBonus1.value = formatter.format(attendanceBonus1.value)
  commission1.value = formatter.format(commission1.value)
  total1.value = formatter.format(total1.value)
  hourlyRate2.value = formatter.format(hourlyRate2.value)
  dialPay2.value = formatter.format(dialPay2.value)
  attendanceBonus2.value = formatter.format(attendanceBonus2.value)
  commission2.value = formatter.format(commission2.value)
  total2.value = formatter.format(total2.value)
  payPeriod.value = formatter.format(payPeriod.value)
}

