// Assigning variables to all parts of the HTML that will either be clicked, or show input or output to the user.

const numberInputs = document.querySelectorAll('.input-number')
const operatorInputs = document.querySelectorAll('.input-operator')

const backspace = document.querySelector('.input-clear')
const clearAll = document.querySelector('.input-clear-all')
const period = document.querySelector('.input-period')
const inputArea = document.querySelector('.current-input')
const outputArea = document.querySelector('.output')

// List of all legal operations.

const operations = ['+', '-', '*', '/', '%']

// List of basic math functions the calculator will use.

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

// Adding event listeners to all keys on the calculator.