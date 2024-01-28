//Create Variables From HTML

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
const clear = document.querySelector('.reset');
const equals = document.querySelector(".equals");

//Create Global Variables 
let num1 = "";
let num2 = "";
let operator = "";
let displayValue = ""; 

//Add Event Listeners For Every Number
numbers.forEach(number => {
    number.addEventListener("click", (e) => {
       displayValue += e.target.getAttribute("data-value");
       updateDisplay();
    })
})
//Add Event Listeners For Every Operator

operators.forEach(opElement => {
    opElement.addEventListener('click', (e) => {
        if (!operator) {
            num1 = displayValue; // Store current display value as num1
            operator = e.target.getAttribute("data-value"); // Set the operator
            displayValue = ""; // Clear display value for the next input
        } else {
            num2 = displayValue; // Store current display value as num2
            const result = operate(operator, num1, num2); // Perform operation
            display.textContent = formatResult(result); // Update the display with formatted result
            displayValue = ""; // Clear display value for the next input
            num1 = result.toString(); // Set result as num1 for next operation
            operator = e.target.getAttribute("data-value"); // Update operator for next operation
        }
    });
});

equals.addEventListener('click', () => {
    if (num1 && operator && displayValue) {
        num2 = displayValue; 
        const result = operate(operator, num1, num2);
        display.textContent = formatResult(result);
        num1 = result.toString(); // Store the result for the next operation
        operator = ""; // Reset the operator for the next operation
        displayValue = ""; // Reset displayValue to start fresh for next input
    }
});


//Add Event Listener For Clear Button
clear.addEventListener('click', () => {
        num1 = "";
        num2 = "";
        operator = "";
        displayValue = "";
        display.textContent = "0";
})

//Create Logic for Appropriate Function Call 
function operate(operator, num1, num2) {
    let first = parseFloat(num1);
    let second = parseFloat(num2);
    switch(operator) {
        case "+": return first + second
        case "-": return first - second
        case "*": return first * second
        case "/":
            if (second === 0) {
                return "Syntax Error: Can't Divide by Zero"
            } 
            return first / second;
        default: return 0; 
            
    } 
}

function formatResult(result) {
    return Number.isFinite(result) ? parseFloat(result.toFixed(7)) : "Error"
}

//Create Functions to Update the Display 

function updateDisplay() {
    display.textContent = displayValue; 
}

