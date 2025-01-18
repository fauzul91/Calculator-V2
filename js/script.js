const display = document.getElementById("display")
const calculator = document.querySelector('.calculator');
function appendValue(value){
    display.value += value
}

function clearDisplay(){
    display.value = ""
}

function deleteChar(){
    display.value = display.value.slice(0, -1)
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "error"
    }
}

function toggleDarkMode(){
    calculator.classList.toggle('dark-mode');
    calculator.classList.toggle('light-mode');
}