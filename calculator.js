const display = document.getElementById('display');
const buttons = document.getElementById('.button');

let currentInput = '';
let previousInput = '';
let operator = '';


function calculate(a, b, operator) {
    if (operator === '+') {
        return a + b;
    }
    else if (operator === '-') {
        return a - b;
    }
    else if (operator === '*') {
        return a * b;
    }
    else if (operator === '/') {
        return a / b;
    }
}

function updateDisplay(value) {
    display.innerText = value;
}