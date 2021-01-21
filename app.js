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

function addClass(elements, myClass) {
  // if there are no elements, we're done
  if (!elements) { return; }
  // if we have a selector, get the chosen elements
  if (typeof(elements) === 'string') {
    elements = document.querySelectorAll(elements);
  }
  // if we have a single DOM element, make it an array to simplify behavior
  else if (elements.tagName) { elements=[elements]; }
  // add class to all chosen elements
  for (var i=0; i<elements.length; i++) {
    // if class is not already found
    if ( (' '+elements[i].className+' ').indexOf(' '+myClass+' ') < 0 ) {
      // add class
      elements[i].className += ' ' + myClass;
    }
  }
}

function removeClass(elements, myClass) {
  // if there are no elements, we're done
  if (!elements) { return; }
  // if we have a selector, get the chosen elements
  if (typeof(elements) === 'string') {
    elements = document.querySelectorAll(elements);
  }
  // if we have a single DOM element, make it an array to simplify behavior
  else if (elements.tagName) { elements=[elements]; }
  // create pattern to find class name
  let reg = new RegExp('(^| )'+myClass+'($| )','g');
  // remove class from all chosen elements
  for (let i=0; i<elements.length; i++) {
    elements[i].className = elements[i].className.replace(reg,' ');
  }
}

let checkbox = document.getElementById("basicOrAdv1");
let reset = document.querySelector(".reset");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    removeClass(document.querySelectorAll(".invisible"), "hide");
  } else {
    addClass(document.querySelectorAll(".invisible"), "hide");
  }
});

reset.addEventListener('click', function() {
    addClass(document.querySelectorAll(".invisible"), "hide");
});

let checkbox2 = document.getElementById("basicOrAdvBlitz");
let resetBlitz = document.querySelector(".resetBlitz");

checkbox2.addEventListener('change', function() {
  if (this.checked) {
    removeClass(document.querySelectorAll(".invisibleBlitz"), "hide");
  } else {
    addClass(document.querySelectorAll(".invisibleBlitz"), "hide");
  }
});

resetBlitz.addEventListener('click', function() {
  addClass(document.querySelectorAll(".invisibleBlitz"), "hide");
});

let checkbox3 = document.getElementById("basicOrAdvRetention");
let resetRetention = document.querySelector(".resetRetention");

checkbox3.addEventListener('change', function() {
  if (this.checked) {
    removeClass(document.querySelectorAll(".invisibleRetention"), "hide");
  } else {
    addClass(document.querySelectorAll(".invisibleRetention"), "hide");
  }
});

resetRetention.addEventListener('click', function() {
  addClass(document.querySelectorAll(".invisibleRetention"), "hide");
});

// Curreancy foramtter for calculator
let formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

function findSelectUPH () {
  // Calculates the agents rates for week 1
  let units1 = document.getElementById("units1");
  let select1 = document.getElementById("select1");
  let apple1 = document.getElementById("apple1");
  let hours1 = document.getElementById("hours1");
  let uph1 = document.getElementById("uph1");
  let hourlyRate1 = document.getElementById("hourlyRate1");
  let dialPay1 = document.getElementById("dialPay1");
  let attendanceBonus1 = document.getElementById("attendanceBonus1"); 
  let commission1 = document.getElementById("commission1"); 
  let total1 = document.getElementById("total1");
  let pt = document.getElementById("ftOrPt");
  let nite = document.getElementById("dayOrNite");
  let overtwohundred1 = ((parseInt(units1.value) - Math.floor((hours1.value * 0.50))) * 5);
  let scheduled1 = null;
  
  if (units1.value != null && hours1.value != null) {
    uph1.value = (units1.value/hours1.value).toFixed(2)
    dialPay1.value = hours1.value * 10

    // Calculates agent's attendance bonus based on FT/PT and Day/Night and at least 97.5%
    if (pt.checked == true) {
      scheduled1 = 20;
      if (hours1.value / scheduled1 >= 0.975) {
        attendanceBonus1.value = 1;    
      } else {
        attendanceBonus1.value = 0;
      }
    } else {
      scheduled1 = 40;
      if (hours1.value / scheduled1 >= 0.975) {
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
        commission1.value = 8.95 + (overtwohundred1 / hours1.value);
      } else if (uph1.value >= 0.48) {
        commission1.value = 7.70;
      } else if (uph1.value >= 0.45) {
        commission1.value = 6.45;
      } else if (uph1.value >= 0.43) {
        commission1.value = 5.05;
      } else if (uph1.value >= 0.40) {
        commission1.value = 4.50;
      } else if (uph1.value >= 0.38) {
        commission1.value = 4.05;
      } else if (uph1.value >= 0.35) {
        commission1.value = 3.15;
      } else if (uph1.value >= 0.33) {
        commission1.value = 3.00;
      } else if (uph1.value >= 0.30) {
        commission1.value = 2.90;
      } else if (uph1.value >= 0.28) {
        commission1.value = 2.75;
      } else if (uph1.value >= 0.25) {
        commission1.value = 2.65;
      } else {
        commission1.value = 0;   
      }
    } else {
      commission1.value = 0,
      hourlyRate1.value = 10;
    }

    attendanceBonus1.value = attendanceBonus1.value * hours1.value
    commission1.value = commission1.value * hours1.value + apple1.value * 5 + select1.value * 7 
    total1.value = parseFloat(dialPay1.value) + parseFloat(attendanceBonus1.value) + parseFloat(commission1.value)
    hourlyRate1.value = total1.value / hours1.value
  } 

  // Calculates the agents rates for week 2
  let units2 = document.getElementById("units2");
  let select2 = document.getElementById("select2");
  let apple2 = document.getElementById("apple2");
  let hours2 = document.getElementById("hours2");
  let uph2 = document.getElementById("uph2");
  let hourlyRate2 = document.getElementById("hourlyRate2");
  let dialPay2 = document.getElementById("dialPay2");
  let attendanceBonus2 = document.getElementById("attendanceBonus2"); 
  let commission2 = document.getElementById("commission2"); 
  let total2 = document.getElementById("total2");
  let overtwohundred2 = ((parseInt(units2.value) - Math.floor((hours2.value * 0.50))) * 5);
  let scheduled2 = null;
  let payPeriod = document.getElementById("payPeriod");

  if (units2.value != null && hours2.value != null) {
    uph2.value = (units2.value/hours2.value).toFixed(2)
    dialPay2.value = hours2.value * 10

    // Calculates agent's attendance bonus based on FT/PT and Day/Night and at least 97.5%
    if (pt.checked == true) {
      scheduled2 = 20;
      if (hours2.value / scheduled2 >= 0.975) {
        attendanceBonus2.value = 1;    
      } else {
        attendanceBonus2.value = 0;
      }
    } else {
      scheduled2 = 40;
      if (hours2.value / scheduled2 >= 0.975) {
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
      if (uph2.value >= 0.50) {
        commission2.value = 8.95 + overtwohundred2 / hours2.value;
      } else if (uph2.value >= 0.48) {
        commission2.value = 7.70; 
      } else if (uph2.value >= 0.45) {
        commission2.value = 6.45; 
      } else if (uph2.value >= 0.43) {
        commission2.value = 5.05; 
      } else if (uph2.value >= 0.40) {
        commission2.value = 4.50; 
      } else if (uph2.value >= 0.38) {
        commission2.value = 4.05;
      } else if (uph2.value >= 0.35) {
        commission2.value = 3.15;
      } else if (uph2.value >= 0.33) {
        commission2.value = 3.00; 
      } else if (uph2.value >= 0.30) {
        commission2.value = 2.90;
      } else if (uph2.value >= 0.28) {
        commission2.value = 2.75;
      } else if (uph2.value >= 0.25) {
        commission2.value = 2.65;
      } else {
        commission2.value = 0;  
      }
    } else {
    commission2.value = 0,
    hourlyRate2.value = 10;
    }

    attendanceBonus2.value = attendanceBonus2.value * hours2.value
    commission2.value = commission2.value * hours2.value + apple2.value * 5 + select2.value * 7
    total2.value = parseFloat(dialPay2.value) + parseFloat(attendanceBonus2.value) + parseFloat(commission2.value)
    hourlyRate2.value = total2.value / hours2.value 
  }

  payPeriod.value = parseFloat(total1.value) + parseFloat(total2.value)

  if (isNaN(uph1.value)) {
    uph1.value = (0).toFixed(2);
  } 
  if (isNaN(hourlyRate1.value)) {
    hourlyRate1.value = (0).toFixed(2);
  } 
  if (isNaN(uph2.value)) {
    uph2.value = (0).toFixed(2);
  } 
  if (isNaN(hourlyRate2.value)) {
    hourlyRate2.value = (0).toFixed(2);
  } 

  // Formatting values to currency
  hourlyRate1.value = formatter.format(hourlyRate1.value);
  dialPay1.value = formatter.format(dialPay1.value);
  attendanceBonus1.value = formatter.format(attendanceBonus1.value);
  commission1.value = formatter.format(commission1.value);
  total1.value = formatter.format(total1.value);
  hourlyRate2.value = formatter.format(hourlyRate2.value);
  dialPay2.value = formatter.format(dialPay2.value);
  attendanceBonus2.value = formatter.format(attendanceBonus2.value);
  commission2.value = formatter.format(commission2.value);
  total2.value = formatter.format(total2.value);
  payPeriod.value = formatter.format(payPeriod.value);
}

function findBlitzUPH () {
  // Calculates the agents rates for week 1
  let units1 = document.getElementById("unitsBlitz1");
  let hours1 = document.getElementById("hoursBlitz1");
  let uph1 = document.getElementById("uphBlitz1");
  let hourlyRate1 = document.getElementById("hourlyRateBlitz1");
  let dialPay1 = document.getElementById("dialPayBlitz1");
  let attendanceBonus1 = document.getElementById("attendanceBonusBlitz1"); 
  let commission1 = document.getElementById("commissionBlitz1"); 
  let total1 = document.getElementById("totalBlitz1");
  let pt = document.getElementById("ftOrPtBlitz");
  let nite = document.getElementById("dayOrNiteBlitz");
  let scheduled1 = null;

  if (units1.value != null && hours1.value != null) {
    uph1.value = (units1.value/hours1.value).toFixed(2);
    dialPay1.value = hours1.value * 10.50;

    // Calculates agent's attendance bonus based on FT/PT and Day/Night and at least 97.5%
    if (pt.checked == true) {
      scheduled1 = 20;
      if (hours1.value / scheduled1 >= 0.975) {
        attendanceBonus1.value = 1;    
      } else {
        attendanceBonus1.value = 0;
      }
    } else {
      scheduled1 = 40;
      if (hours1.value / scheduled1 >= 0.975) {
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
    if (attendanceBonus1.value != 0) {
      if (uph1.value >= 0.40) {
        commission1.value = 35;
      } else if (uph1.value >= 0.33) {
        commission1.value = 30;
      } else if (uph1.value >= 0.25) {
        commission1.value = 25;
      } else if (uph1.value >= 0.20) {
        commission1.value = 20;
      } else if (uph1.value >= 0.13) {
        commission1.value = 15;
      } else {
        commission1.value = 10;   
      }
    } else {
      commission1.value = 0,
      hourlyRate1.value = 10.50;
    }
    attendanceBonus1.value = attendanceBonus1.value * hours1.value;
    commission1.value = commission1.value * units1.value;
    total1.value = parseFloat(dialPay1.value) + parseFloat(attendanceBonus1.value) + parseFloat(commission1.value);
    hourlyRate1.value = total1.value / hours1.value;
  } 
  
  // Calculates the agents rates for week 2
  let units2 = document.getElementById("unitsBlitz2");
  let hours2 = document.getElementById("hoursBlitz2");
  let uph2 = document.getElementById("uphBlitz2");
  let hourlyRate2 = document.getElementById("hourlyRateBlitz2");
  let dialPay2 = document.getElementById("dialPayBlitz2");
  let attendanceBonus2 = document.getElementById("attendanceBonusBlitz2"); 
  let commission2 = document.getElementById("commissionBlitz2"); 
  let total2 = document.getElementById("totalBlitz2");
  let scheduled2 = null;
  let payPeriod = document.getElementById("payPeriodBlitz");

  if (units2.value != null && hours2.value != null) {
    uph2.value = (units2.value/hours2.value).toFixed(2)
    dialPay2.value = hours2.value * 10.50;

    // Calculates agent's attendance bonus based on FT/PT and Day/Night and at least 97.5%
    if (pt.checked == true) {
      scheduled2 = 20;
      if (hours2.value / scheduled2 >= 0.975) {
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
      if (uph1.value >= 0.40) {
        commission2.value = 35;
      } else if (uph1.value >= 0.33) {
        commission2.value = 30;
      } else if (uph1.value >= 0.25) {
        commission2.value = 25;
      } else if (uph1.value >= 0.20) {
        commission2.value = 20;
      } else if (uph1.value >= 0.13) {
        commission2.value = 15;
      } else {
        commission2.value = 10;   
      }
    } else {
      commission2.value = 0,
      hourlyRate2.value = 10.50;
    }

    attendanceBonus2.value = attendanceBonus2.value * hours2.value;
    commission2.value = commission2.value * units2.value;
    total2.value = parseFloat(dialPay2.value) + parseFloat(commission2.value) + parseFloat(attendanceBonus2.value);
    hourlyRate2.value = total2.value / hours2.value;
   }

  payPeriod.value = parseFloat(total1.value) + parseFloat(total2.value);

  if (isNaN(uph1.value)) {
    uph1.value = (0).toFixed(2);
  } 
  if (isNaN(hourlyRate1.value)) {
    hourlyRate1.value = (0).toFixed(2);
  } 
  if (isNaN(uph2.value)) {
    uph2.value = (0).toFixed(2);
  } 
  if (isNaN(hourlyRate2.value)) {
    hourlyRate2.value = (0).toFixed(2);
  } 

  // Formatting values to currency
  hourlyRate1.value = formatter.format(hourlyRate1.value);
  dialPay1.value = formatter.format(dialPay1.value);
  attendanceBonus1.value = formatter.format(attendanceBonus1.value);
  commission1.value = formatter.format(commission1.value);
  total1.value = formatter.format(total1.value);
  hourlyRate2.value = formatter.format(hourlyRate2.value);
  dialPay2.value = formatter.format(dialPay2.value);
  attendanceBonus2.value = formatter.format(attendanceBonus2.value);
  commission2.value = formatter.format(commission2.value);
  total2.value = formatter.format(total2.value);
  payPeriod.value = formatter.format(payPeriod.value);
}

function findRetentionUPH () {
  // Calculates the agents rates for week 1
  let gfr1 = document.getElementById("gfrRetention1");
  let units1 = document.getElementById("unitsRetention1");
  let hours1 = document.getElementById("hoursRetention1");
  let aht1 = document.getElementById("ahtRetention1");
  let hourlyRate1 = document.getElementById("hourlyRateRetention1");
  let dialPay1 = document.getElementById("dialPayRetention1");
  let attendanceBonus1 = document.getElementById("attendanceBonusRetention1"); 
  let commission1 = document.getElementById("commissionRetention1"); 
  let total1 = document.getElementById("totalRetention1");
  let pt = document.getElementById("ftOrPtRetention");
  let nite = document.getElementById("dayOrNiteRetention");
  let scheduled1 = null;

  if (hours1.value != null) {
      dialPay1.value = hours1.value * 11.00;

    // Calculates agent's attendance bonus based on FT/PT and Day/Night and at least 97.5%
    if (pt.checked == true) {
      scheduled1 = 20;
      if (hours1.value / scheduled1 >= 0.975) {
        attendanceBonus1.value = 2;    
      } else {
        attendanceBonus1.value = 0;
      }
    } else {
      scheduled1 = 40;
      if (hours1.value / scheduled1 >= 0.975) {
        if (nite.checked == true) {
          attendanceBonus1.value = 3;
        } else {
          attendanceBonus1.value = 2;
        }
      } else {
        attendanceBonus1.value = 0;
      }
    }

    // Calculates the commssion tier the agent achieved based on AHT
    if (attendanceBonus1.value != 0) {
      if (aht1.value > 850) {
        commission1.value = 0.0;
      } else if (aht1.value >= 800) {
        commission1.value = 0.50;
      } else if (aht1.value > 750) {
        commission1.value = 1.00;
      } else if (aht1.value >= 700) {
        commission1.value = 0.50;
      } else {
        commission1.value = 0;   
      }
    } else {
      commission1.value = 0,
      hourlyRate1.value = 11.00;
    }  
    console.log(commission1.value)
    attendanceBonus1.value = attendanceBonus1.value * hours1.value;
    commission1.value = commission1.value * hours1.value + units1.value * 25 + gfr1.value * hours1.value;
    total1.value = parseFloat(dialPay1.value) + parseFloat(attendanceBonus1.value) + parseFloat(commission1.value);
    hourlyRate1.value = total1.value / hours1.value;
  } 

  // Calculates the agents rates for week 2
  let gfr2 = document.getElementById("gfrRetention2");
  let units2 = document.getElementById("unitsRetention2");
  let hours2 = document.getElementById("hoursRetention2");
  let aht2 = document.getElementById("ahtRetention2");
  let hourlyRate2 = document.getElementById("hourlyRateRetention2");
  let dialPay2 = document.getElementById("dialPayRetention2");
  let attendanceBonus2 = document.getElementById("attendanceBonusRetention2"); 
  let commission2 = document.getElementById("commissionRetention2"); 
  let total2 = document.getElementById("totalRetention2");
  let scheduled2 = null;
  let payPeriod = document.getElementById("payPeriodRetention");
  
  if (hours2.value != null) {
      dialPay2.value = hours2.value * 11.00;

    // Calculates agent's attendance bonus based on FT/PT and Day/Night and at least 97.5%
    if (pt.checked == true) {
      scheduled2 = 20;
      if (hours2.value / scheduled2 >= 0.975) {
        attendanceBonus2.value = 2;    
      } else {
        attendanceBonus2.value = 0;
      }
    } else {
      scheduled2 = 40;
      if (hours2.value / scheduled2 >= 0.975) {
        if (nite.checked == true) {
          attendanceBonus2.value = 3;
        } else {
          attendanceBonus2.value = 2;
        }
      } else {
        attendanceBonus2.value = 0;
      }
    }

    // Calculates the commssion tier the agent achieved based on AHT
    if (attendanceBonus2.value != 0) {
      if (aht2.value > 850) {
        commission2.value = 0.0;
      } else if (aht2.value >= 800) {
        commission2.value = 0.50;
      } else if (aht2.value > 750) {
        commission2.value = 1.00;
      } else if (aht2.value >= 700) {
        commission2.value = 0.50;
      } else {
        commission2.value = 0;   
      }
    } else {
      commission2.value = 0,
      hourlyRate2.value = 11.00;
    }

    attendanceBonus2.value = attendanceBonus2.value * hours2.value;
    commission2.value = commission2.value * hours2.value + parseFloat(units2.value) * 25 + gfr2.value * hours2.value;
    total2.value = parseFloat(dialPay2.value) + parseFloat(attendanceBonus2.value) + parseFloat(commission2.value);
    hourlyRate2.value = total2.value / hours2.value;
  }

  if (isNaN(hourlyRate1.value)) {
    hourlyRate1.value = (0).toFixed(2);
  }
  if (isNaN(commission1.value)) {
    commission1.value = (0).toFixed(2);
  }  
  if (isNaN(total1.value)) {
    total1.value = (0).toFixed(2);
  }  
  if (isNaN(hourlyRate2.value)) {
    hourlyRate2.value = (0).toFixed(2);
  } 
  if (isNaN(commission2.value)) {
    commission2.value = (0).toFixed(2);
  } 
  if (isNaN(total2.value)) {
    total2.value = (0).toFixed(2);
  }
  if (isNaN(payPeriod.value)) {
    payPeriod.value = (0).toFixed(2);
  }

  payPeriod.value = parseFloat(total1.value) + parseFloat(total2.value);

  // Formatting values to currency
  hourlyRate1.value = formatter.format(hourlyRate1.value);
  dialPay1.value = formatter.format(dialPay1.value);
  attendanceBonus1.value = formatter.format(attendanceBonus1.value);
  commission1.value = formatter.format(commission1.value);
  total1.value = formatter.format(total1.value);
  hourlyRate2.value = formatter.format(hourlyRate2.value);
  dialPay2.value = formatter.format(dialPay2.value);
  attendanceBonus2.value = formatter.format(attendanceBonus2.value);
  commission2.value = formatter.format(commission2.value);
  total2.value = formatter.format(total2.value);
  payPeriod.value = formatter.format(payPeriod.value);
}
