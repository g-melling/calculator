const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
    const buttonText = event.target.innerText;

    if (buttonText >= 0 && buttonText <= 9 || buttonText === ".") {
        if (buttonText === '.' && currentInput.includes('.')) {
            return;
        }
        currentInput += buttonText;
        updateDisplay(currentInput);
    }

    else if (['+', '-', '/', 'X'].includes(buttonText)) {
        if (operator && currentInput) {
            calculate();
        }
        operator = buttonText;
        previousInput = currentInput;
        currentInput = '';
    }

    else if (buttonText === '=') {
        if (currentInput !== '' && previousInput !== '') {
            calculate();
        }
    }

    else if (buttonText === '+/-') {
        if (currentInput) {
            currentInput = parseFloat(currentInput * -1).toString();
            updateDisplay(currentInput);
        }
    }

    else if (buttonText === '%') {
        if (currentInput) {
            currentInput = (parseFloat(currentInput) / 100).toString();
            updateDisplay(currentInput);
        }
    }

    else if (buttonText === 'A/C') {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay('0');
    }

    else if (buttonText === 'C') {
        currentInput = currentInput.slice(0, -1);
        updateDisplay(currentInput || '0');
    }
}

function calculate() {
    if (currentInput !== '' && previousInput !== '') {
        let prev = parseFloat(previousInput);
        let current = parseFloat(currentInput);
        let result;

        switch(operator) {
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "/":
                if (current === 0) {
                    updateDisplay("Error");
                    currentInput = '';
                    previousInput = '';
                    operator = '';
                    return;
                }
                result = prev / current;
                break;
            case "X":
                result = prev * current;
                break;
            default:
                return;
        }

        updateDisplay(result.toString());
        currentInput = result.toString();
        previousInput = '';
        operator = '';
    }
}

function updateDisplay(value) {
    display.innerText = value || "0";
}