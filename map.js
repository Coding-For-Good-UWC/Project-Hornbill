let API = 'pk.eyJ1IjoidGhvbXBzb250IiwiYSI6ImNsMHVqYm9scjB4dzEza3FvaG56a2l3ZDIifQ.Qao6qT2B09RiYXo8y5hbcw'

let loc = [];
if(localStorage.getItem("loc") != null){
    loc = JSON.parse(localStorage.getItem("loc"));
}

function setEmbed() {
  if(loc.length > 0){
    let coords  = loc[loc.length-1].split(",")
    let latitude = coords[0].substring(1);
    let longitude = coords[1].substring(0, coords[1].length - 1);
    let src = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+555555("
              + longitude + ","+ latitude +")/" + longitude + ","+ latitude
              + ",16,0/800x600?before_layer=poi-label&access_token=" + API;
    document.getElementById("map").src = src
  }
  else {
   document.getElementById("error-message").innerHTML = "You have not spotted a Hornbill yet!"
  }
}

setEmbed()