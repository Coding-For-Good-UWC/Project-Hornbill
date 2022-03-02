
// Current Time
let button = document.getElementById('time')

button.addEventListener("click",()=>{
	document.getElementById('target').innerHTML = Date();
});

// Hornbills Sighted
let counterPlusElem = document.getElementById('counter-plus');
let counterDisplayElem = document.getElementById('counter-display');
let content = counterDisplayElem.innerHTML

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

function updateDisplay(){
    counterDisplayElem.innerHTML = content + count.toString();
};