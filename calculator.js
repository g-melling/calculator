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

    else if (['+', '-', '/', 'X'].includes(buttonText)) {
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

    else if (buttonText === '%') {
        if (currentInput) {
            let percent = (parseFloat(currentInput) / 100).toString();
            updateDisplay(currentInput);
        }
    }

    else if (buttonText === 'A/C') {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay();
    }

    else if (buttonText === 'C'); {
        currentInput = currentInput.slice(0, -1);
    }
}

function calculate() {
    if (currentInput !== '' && previousInput !== '') {
        let prev = parseFloat(previousInput);
        let current = parseFloat(currentInput);

        switch(operator) {
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "/":
                result = prev / current;
                break;
            case "X":
                result = prev * current;
                break;
            default:
                return;
        }

        updateDisplay(result.toString);
        previousInput = '';
        currentInput = '';
        operator = '';
    }
}

function updateDisplay(value) {
    display.innerText = value || "0";
}