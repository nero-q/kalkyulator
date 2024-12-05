let currentInput = '';

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').textContent = '0';
}

function appendToDisplay(value) {
    if (currentInput === '' && (value === '*' || value === '/' || value === '+' || value === '-')) {
        return; // Don't start with an operator
    }
    currentInput += value;
    document.getElementById('display').textContent = currentInput;
}

function calculateResult() {
    try {
        // Evaluate the expression safely using JavaScript's eval function
        currentInput = eval(currentInput).toString();
        document.getElementById('display').textContent = currentInput;
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
        currentInput = '';
    }
}