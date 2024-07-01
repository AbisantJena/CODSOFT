const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.getAttribute('data-action');
        const number = button.getAttribute('data-number');

        if (number) {
            currentInput += number;
            display.innerText = currentInput;
        }

        if (action) {
            switch(action) {
                case 'clear':
                    currentInput = '';
                    operator = '';
                    firstOperand = '';
                    secondOperand = '';
                    display.innerText = '';
                    break;
                case 'add':
                case 'subtract':
                case 'multiply':
                case 'divide':
                    operator = action;
                    firstOperand = currentInput;
                    currentInput = '';
                    break;
                case 'equals':
                    secondOperand = currentInput;
                    display.innerText = calculate(firstOperand, operator, secondOperand);
                    currentInput = display.innerText;
                    firstOperand = '';
                    secondOperand = '';
                    operator = '';
                    break;
                case 'backspace':
                    currentInput = currentInput.slice(0, -1);
                    display.innerText = currentInput;
                    break;
            }
        }
    });
});

function calculate(a, operator, b) {
    let result = 0;
    a = parseFloat(a);
    b = parseFloat(b);

    switch(operator) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = a / b;
            break;
    }

    return result;
}
