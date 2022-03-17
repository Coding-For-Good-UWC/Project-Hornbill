// Hornbills Sighted
let counterPlusElem = document.getElementById('counter-plus');
let counterDisplayElem = document.getElementById('counter-display');
let counterReset = document.getElementById('reset');
let target = document.getElementById('recent-hornbill-spotted');
let content = counterDisplayElem.innerHTML;

let count = 0;
if(localStorage.getItem("count") != null){
    count = localStorage.getItem("count");
}

let date = [];
if(localStorage.getItem("date") != null){
    date = JSON.parse(localStorage.getItem("date"));
}

let loc = [];
if(localStorage.getItem("loc") != null){
    loc = JSON.parse(localStorage.getItem("loc"));
}
updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateLocalStorage();
    updateDisplay();
    localStorage.setItem("count", count);
});

counterReset.addEventListener("click",()=>{
    count = 0;
    localStorage.setItem("count", count);
    date = [];
    localStorage.setItem("date", JSON.stringify(date));
    loc = [];
    localStorage.setItem("loc", JSON.stringify(loc));
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = content + count.toString();
    if(loc.length == 0 || date.length == 0){
        let response = ""
        target.innerHTML = response;
    }
    else{
        let response = "Most Recent Hornbill Spotted at "+ loc[loc.length-1] + "\nat " + date[date.length-1];
        target.innerHTML = response;
    }
};  


// Updates Geolocation in Local Storage
function updateLocalStorage() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.error("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  date.push(Date());
  loc.push("(" + position.coords.latitude + "," + position.coords.longitude + ")");
  // After we identify the position, we will add localStorage.
  localStorage.setItem("date", JSON.stringify(date));
  localStorage.setItem("loc", JSON.stringify(loc));
  let response = "Most Recent Hornbill Spotted at "+"(" + position.coords.latitude + ","
                   + position.coords.longitude + ")" + "\nat " + Date();
  console.log(response)
  target.innerHTML = response;
}