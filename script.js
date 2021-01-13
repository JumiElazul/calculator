// Assigning variables to all parts of the HTML that will either be clicked, or show input or output to the user.

const numberInputs = document.querySelectorAll('.input-number')
const operatorInputs = document.querySelectorAll('.input-operator')

const periodKey = document.querySelector('.input-period')
const backspaceKey = document.querySelector('.input-clear')
const clearAllKey = document.querySelector('.input-clear-all')
const enterKey = document.querySelector('.input-enter-key')

const outputArea = document.querySelector('.output-text')


// List of all legal operations, and intializing variables to use.

const legalOperators = ['+', '-', '*', '/', '%']

let workingOperation = ''

let currentOperator = null

// Function to clear the calculator to its default state, backspace the input line, and append a period.

function clearAll ()
{
	outputArea.textContent = 0
	workingOperation = ''
	currentOperator = null
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

function operate (operation, operator)
{
	if (currentOperator === null)
	{
		return;
	}
	else
	{
		let result = 0
		let parts = operation.split(operator)
		let num1 = parseFloat(parts[0])
		let num2 = parseFloat(parts[1])

		switch (operator)
		{
			case '+':
				result = add(num1, num2)
				break
			case '-':
				result = subtract(num1, num2)
				break
			case '*':
				result = multiply(num1, num2)
				break
			case '/':
				result = divide(num1, num2)
				break
			case '%':
				result = mod(num1, num2)
				break
		}

		workingOperation = result.toString()
		outputArea.textContent = workingOperation
		currentOperator = null
	}
}

// Functions for changing the appearance of numbers, and displaying output to the user.

function appendNumber (number)
{

	// Statement to disallow 0 being the first number to append, both before and after an operator.

	if ((workingOperation.length == 0 && number == 0) || 
	   (workingOperation.length > 0 && number == 0 && legalOperators.includes(workingOperation[workingOperation.length - 1])))
	{
		return;
	}
	else
	{
		workingOperation += number
		outputArea.textContent = workingOperation
	}
}

function appendOperator (operator)
{
	// Checking to see if the last character is an operator.

	if (!legalOperators.includes(workingOperation[workingOperation.length - 1]))
	{
		currentOperator = operator
		workingOperation += operator
		outputArea.textContent = workingOperation
	}

	else
	{
		currentOperator = operator
		workingOperation = workingOperation.slice(0, workingOperation.length - 1) + operator
		outputArea.textContent = workingOperation
	}
}

// Event listeners for all keys on the calculator.

numberInputs.forEach (function (button) {
	button.addEventListener('click', () => appendNumber(button.textContent))
})

operatorInputs.forEach (function (button) {
	button.addEventListener('click', () => appendOperator(button.textContent))
})

periodKey.addEventListener('click', () => {
	console.log('Period')
})

backspaceKey.addEventListener('click', () => {
	console.log(workingOperation)
})

clearAllKey.addEventListener('click', clearAll)

enterKey.addEventListener('click', () => operate(workingOperation, currentOperator))