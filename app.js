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

function findUPH () {

  let units = document.getElementById("units");
  let hours = document.getElementById("hours");
  let uph = document.getElementById("uph");

  uph.value = units.value/hours.value

  





}
