const temperature = document.getElementById("temperature");
const from = document.getElementById("from");
const to = document.getElementById("to");
const result = document.getElementById("result");
const formula = document.getElementById("formula");
const fact = document.getElementById("fact");
const error = document.getElementById("error");

const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const facts = [
"💧 Water freezes at 0°C.",
"🔥 Water boils at 100°C.",
"🌍 Absolute zero is -273.15°C.",
"☀️ Sun surface ~5500°C.",
"❄️ Antarctica reached -89°C."
];

// CONVERT
convertBtn.addEventListener("click", convert);

function convert(){

let temp = temperature.value;

if(temp === ""){
error.textContent = "❌ Please enter a temperature!";
return;
}

error.textContent = "";

temp = parseFloat(temp);

let output;

if(from.value === "celsius"){
    if(to.value === "fahrenheit"){
        output = (temp*9/5)+32;
        formula.innerText = "(°C × 9/5) + 32";
    }
    else if(to.value === "kelvin"){
        output = temp + 273.15;
        formula.innerText = "°C + 273.15";
    }
    else{
        output = temp;
        formula.innerText = "Same Unit";
    }
}

else if(from.value === "fahrenheit"){
    if(to.value === "celsius"){
        output = (temp-32)*5/9;
        formula.innerText = "(°F - 32) × 5/9";
    }
    else if(to.value === "kelvin"){
        output = ((temp-32)*5/9)+273.15;
        formula.innerText = "((°F - 32) × 5/9) + 273.15";
    }
    else{
        output = temp;
        formula.innerText = "Same Unit";
    }
}

else{
    if(to.value === "celsius"){
        output = temp - 273.15;
        formula.innerText = "K - 273.15";
    }
    else if(to.value === "fahrenheit"){
        output = ((temp-273.15)*9/5)+32;
        formula.innerText = "((K - 273.15) × 9/5) + 32";
    }
    else{
        output = temp;
        formula.innerText = "Same Unit";
    }
}

result.innerText = `🌡️ ${temp} = ${output.toFixed(2)}`;

fact.innerText = facts[Math.floor(Math.random()*facts.length)];
}

// SWAP
swapBtn.addEventListener("click", ()=>{
let temp = from.value;
from.value = to.value;
to.value = temp;
});

// RESET
resetBtn.addEventListener("click", ()=>{
temperature.value = "";
error.textContent = "";
result.innerText = "Result will appear here";
formula.innerText = "";
});

// COPY
copyBtn.addEventListener("click", ()=>{
navigator.clipboard.writeText(result.innerText);
alert("Copied!");
});