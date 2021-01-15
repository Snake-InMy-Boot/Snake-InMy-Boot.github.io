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

let pt = document.getElementById("checkbox1");
let nite = document.getElementById("checkbox2");

function findUPH () {
  let units1 = document.getElementById("units1");
  let hours1 = document.getElementById("hours1");
  let uph1 = document.getElementById("uph1");
  let hourlyRate1 = document.getElementById("hourlyRate1");
  let dialPay1 = document.getElementById("dialPay1");
  let attendanceBonus1 = document.getElementById("attendanceBonus1"); 
  let commission1 = document.getElementById("commission1"); 
  let total1 = document.getElementById("total1"); 
  
  uph1.value = (units1.value/hours1.value).toFixed(2)

  dialPay1.value = (hours1.value * 10).toFixed(2)

  if (pt.checked == false || nite.checked == true) {
    attendanceBonus1.value = (2 * hours1.value).toFixed(2);
  } else {
    attendanceBonus1.value = (1 * hours1.value).toFixed(2);
  }

  if (uph1.value >= 0.50) {
    commission1.value = 8.95,
    hourlyRate1.value = (dialPay1.value / hours1.value + parseInt(commission1.value)).toFixed(2); 
  } else if (uph1.value >= 0.48) {
    commission1.value = 7.70,
    hourlyRate1.value = (dialPay1.value / hours1.value + parseInt(commission1.value)).toFixed(2); 
  } else if (uph1.value >= 0.45) {
    commission1.value = 6.45,
    hourlyRate1.value = (dialPay1.value / hours1.value + parseInt(commission1.value)).toFixed(2); 
  } else if (uph1.value >= 0.43) {
    commission1.value = 5.05,
    hourlyRate1.value = (dialPay1.value / hours1.value + parseInt(commission1.value)).toFixed(2); 
  } else if (uph1.value >= 0.40) {
    commission1.value = 4.50,
    hourlyRate1.value = (dialPay1.value / hours1.value + parseInt(commission1.value)).toFixed(2); 
  } else if (uph1.value >= 0.38) {
    commission1.value = 4.05,
    hourlyRate1.value = (dialPay1.value / hours1.value + parseInt(commission1.value)).toFixed(2); 
  } else if (uph1.value >= 0.35) {
    commission1.value = 3.15,
    hourlyRate1.value = (dialPay1.value / hours1.value + parseInt(commission1.value)).toFixed(2); 
  } else if (uph1.value >= 0.33) {
    commission1.value = 3.00,
    hourlyRate1.value = (dialPay1.value / hours1.value + parseInt(commission1.value)).toFixed(2); 
  } else if (uph1.value >= 0.30) {
    commission1.value = 2.90,
    hourlyRate1.value = (dialPay1.value / hours1.value + parseInt(commission1.value)).toFixed(2); 
  } else if (uph1.value >= 0.28) {
    commission1.value = 2.75,
    hourlyRate1.value = (dialPay1.value / hours1.value + parseInt(commission1.value)).toFixed(2); 
  } else if (uph1.value >= 0.25) {
    commission1.value = 2.65,
    hourlyRate1.value = (dialPay1.value / hours1.value + parseInt(commission1.value)).toFixed(2); 
  } else {
    commission1.value = 0,
    hourlyRate1.value = (dialPay1.value / hours1.value + parseInt(commission1.value)).toFixed(2); 
  }

  commission1.value = (commission1.value * hours1.value).toFixed(2)

  total1.value = (parseInt(dialPay1.value) + parseInt(attendanceBonus1.value) + parseInt(commission1.value)).toFixed(2)







}
