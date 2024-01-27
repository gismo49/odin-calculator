const add = function(a,b) {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);
    let sum = num1+num2;
    return sum;
}


const substract = function(a,b) {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);
    let sub = num1-num2;
    return sub;
}

const multiply = function(a, b) {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);
    let product = num1*num2; 
    return product;
}


const divide = function(a, b) {
    let num1 = parseFloat(a);
    let num2 = parseFloat(b);
    let div = num1/num2;
    return div;
}

let currentInput = '';
let firstNumber = '';
let operator = '';
let secondNumber = '';

document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const display = document.querySelector('.display');
    const clearButton = document.querySelector('.reset');

    numbers.forEach(number => {
        number.addEventListener('click', () => {
            handleNumber(number.getAttribute('value'));
        });
    });
    
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            handleOperator(operator.getAttribute('value'));
        });
    });
    
    clearButton.addEventListener('click', clearDisplay);
})

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
        add(firstNumber, secondNumber)
    } else if (operator === "-") {
        substract(firstNumber, secondNumber)
    } else if (operator === "*") {
        multiply(firstNumber, secondNumber)
    } else if (operator === "/") {
        divide(firstNumber, secondNumber)
    }
}


