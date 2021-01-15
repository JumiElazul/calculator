// Assigning variables to all parts of the HTML that will either be clicked, or show input 
// or output to the user.

const numberInputs = document.querySelectorAll('.input-number')
const operatorInputs = document.querySelectorAll('.input-operator')

const periodKey = document.querySelector('.input-period')
const backspaceKey = document.querySelector('.input-clear')
const clearAllKey = document.querySelector('.input-clear-all')
const enterKey = document.querySelector('.input-enter-key')

const outputArea = document.querySelector('.output-text')

// Functions for handling all keyboard input

function keyboardEventHandler (key)
{

}

function clearAll ()
{

}


function backspace (calculation)
{

}

function appendPeriod (calculation)
{

}

// Functions for all the math the calculator will use.

function add (num1, num2) {
	return num1 + num2
}

function subtract (num1, num2) {
	return num1 - num2
}

function multiply (num1, num2) {
	return num1 * num2
}

function divide (num1, num2) {
	return num1 / num2
}

function mod (num1, num2) {
	return (num1 % num2 + num2) % num2
}

function operate (operand1, operand2, operator)
{

}

// Functions for changing the appearance of numbers, and displaying output to the user.

function appendNumber (number)
{

}

function appendOperator (operator)
{

}


// Event listeners for all keys on the calculator.

numberInputs.forEach (function (button) {
	button.addEventListener('click', () => console.log("Number"))
})

operatorInputs.forEach (function (button) {
	button.addEventListener('click', () => console.log("Operator"))
})

periodKey.addEventListener('click', () => console.log("Period"))

backspaceKey.addEventListener('click', () => console.log("Backspace"))

clearAllKey.addEventListener('click', () => console.log("Clear All"))

enterKey.addEventListener('click', () => console.log("Enter Key"))

window.addEventListener('keydown', () => keyboardEventHandler)