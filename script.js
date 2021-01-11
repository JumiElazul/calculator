// Assigning variables to all parts of the HTML that will either be clicked, or show input or output to the user.

const numberInputs = document.querySelectorAll('.input-number')
const operatorInputs = document.querySelectorAll('.input-operator')

const period = document.querySelector('.input-period')
const backspace = document.querySelector('.input-clear')
const clearAll = document.querySelector('.input-clear-all')
const enterKey = document.querySelector('.input-enter-key')
const inputArea = document.querySelector('.current-input')
const outputArea = document.querySelector('.output')


// List of all legal operations.

const operations = ['+', '-', '*', '/', '%']
let operator = null
let num1 = null
let num2 = null

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

// Functions for changing the appearance of numbers, and displaying output to the user.

function appendNumber (append)
{
	inputArea.textContent += append
}

function appendOperator (append)
{
	if (operations.includes(inputArea.textContent[inputArea.textContent.length - 1]))
	{
		operator = append
		inputArea.textContent = inputArea.textContent.slice(0, inputArea.textContent.length - 1) + append
	}
	else
	{
		operator = append
		inputArea.textContent += append
	}
}

// Event listeners for all keys on the calculator.

numberInputs.forEach (function (button) {
	button.addEventListener('click', () => appendNumber(button.textContent))
})

operatorInputs.forEach (function (button) {
	button.addEventListener('click', () => appendOperator(button.textContent))
})

period.addEventListener('click', () =>
{
	console.log('period')
})

backspace.addEventListener('click', () =>
{
	console.log('backspace')
})

clearAll.addEventListener('click', () =>
{
	console.log('clear all')
})

enterKey.addEventListener('click', () => 
{
	console.log('enterkey')
})