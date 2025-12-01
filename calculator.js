const display = document.getElementById('display');
const buttons = document.getElementById('.button');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
    const buttonText = event.target.innerText;

    if (buttonText >= 0 && buttonText <= 0 || buttonText === ".") {
        // update display
        currentInput += buttonText;
        updateDisplay(currentInput);
    }

    else if (['+', '-', '/', 'X', '%'].includes(buttonText)) {
        if (operator && currentInput) {
            calculate();
        }
        operator = buttonText;
        previousInput = currentInput;
        currentInput = '';
    }

    else if (buttonText === '=') {
        if currentInput !== '' {
            calculate();
        }
    }

    else if (buttonText === '+/-') {
        if (currentInput) {
            currentInput = `${-}currentInput`;
        }
    }

// handle +- function

// handle percent function

// handle AC

// handle clear
}







// calculate function (check if current and previous input have values)

function updateDisplay(value) {
    display.innerText = value || "0";
}