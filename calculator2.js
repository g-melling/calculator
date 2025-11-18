// Select all the buttons and the display element
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

// Initialize some variables to store the current calculation state
let currentInput = '';
let operator = '';
let previousInput = '';

// Event listener for each button click
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
    const buttonText = event.target.innerText;

    // Handle numbers and decimal points
    if (buttonText >= '0' && buttonText <= '9' || buttonText === '.') {
        // If the user presses a number or decimal, append it to the current input
        currentInput += buttonText;
        updateDisplay(currentInput);
    }
    
    // Handle operators
    else if (['+', '-', 'X', '/', '%'].includes(buttonText)) {
        // If there's already an operator, calculate first before switching operators
        if (operator && currentInput) {
            calculate();
        }

        // Set the operator and prepare for the next number input
        operator = buttonText;
        previousInput = currentInput;
        currentInput = '';
    }
    
    // Handle the equals button
    else if (buttonText === '=') {
        if (currentInput !== '') {
            calculate();
        }
    }

    // Handle Clear button (C)
    else if (buttonText === 'C') {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay('0');
    }

    // Handle All Clear button (A/C)
    else if (buttonText === 'A/C') {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay('0');
    }

    // Handle Percent button (%)
    else if (buttonText === '%') {
        if (currentInput) {
            currentInput = (parseFloat(currentInput) / 100).toString();
            updateDisplay(currentInput);
        }
    }

    // Handle the +/- button (negating a number)
    else if (buttonText === '+/-') {
        if (currentInput) {
            currentInput = (parseFloat(currentInput) * -1).toString();
            updateDisplay(currentInput);
        }
    }
}

// Function to perform the calculation
function calculate() {
    if (previousInput !== '' && currentInput !== '') {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case 'X':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    result = 'Error';
                } else {
                    result = prev / current;
                }
                break;
            default:
                return;
        }

        // Update the display with the result
        currentInput = result.toString();
        operator = '';
        previousInput = '';
        updateDisplay(currentInput);
    }
}

// Function to update the display
function updateDisplay(value) {
    display.innerText = value || '0';
}
