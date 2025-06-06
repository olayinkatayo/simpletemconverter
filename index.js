const tempInput = document.getElementById("tempInput");
const cToF = document.getElementById("cToF");
const fToC = document.getElementById("fToC");
const result = document.getElementById("result");

let tempValue;
let convertedValue;

function convert(){
    if(cToF.checked) {
        tempValue = parseFloat(tempInput.value);
        if (isNaN(tempValue)) {
            result.textContent = "Please enter a valid temperature.";
            return;
        }
        let convertedValue = (tempValue * 9/5) + 32;
        result.textContent = `${tempValue}°C equals ${convertedValue.toFixed(2)} °F`;
    }
    
    else if (fToC.checked) {
        tempValue = parseFloat(tempInput.value);
        if (isNaN(tempValue)) {
            result.textContent = "Please enter a valid temperature.";
            return;
        }
        let convertedValue = (tempValue - 32) * 5/9;
        result.textContent = `${tempValue}°F equals ${convertedValue.toFixed(2)} °C`;
    }
    
    else {
        result.textContent = "Please select a unit.";
    }

}