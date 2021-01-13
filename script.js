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

let periodUsed = false

// Function to clear the calculator to its default state, backspace the input line, and append a period.

function clearAll ()
{
	outputArea.textContent = 0
	workingOperation = ''
	currentOperator = null
}


function backspace (calculation)
{
	if (calculation.length > 0)
	{
		if (legalOperators.includes(calculation[calculation.length - 1]))
		{
			return
		}
		
		else
		{
			calculation = calculation.slice(0, calculation.length - 1)
			workingOperation = calculation
			outputArea.textContent = workingOperation
		}

	}
	else
	{
		return
	}
}

function appendPeriod (calculation)
{
	// If the last character in workingOperation is a period, break the function.
	if (calculation.length > 0 && calculation[calculation.length - 1].includes('.'))
	{
		return
	}
	else
	{
		if (periodUsed == false)
		{
			workingOperation += '.'
			outputArea.textContent = workingOperation
			periodUsed = true
		}
		else
		{
			return
		}

	}
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

	// Don't operate unless there is a current operator set.  At the end, reset the operator is null again.

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

		if (isNaN(num1) || isNaN(num2))
		{
			return
		}
		else
		{
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
		}

		workingOperation = result.toString()
		outputArea.textContent = workingOperation
		currentOperator = null
		periodUsed = false
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

	// If the operator has not been changed from null, operate function does not need to be run.

	if (currentOperator === null)
	{
		// Checking to see if the last character is an operator.

		if (!legalOperators.includes(workingOperation[workingOperation.length - 1]))
		{
			currentOperator = operator
			workingOperation += operator
			outputArea.textContent = workingOperation
			periodUsed = false
		}

		else
		{
			currentOperator = operator
			workingOperation = workingOperation.slice(0, workingOperation.length - 1) + operator
			outputArea.textContent = workingOperation
			periodUsed = false
		}
	}

	// If the operator has been set, we need to run operate when user clicks another operate.
	else
	{
		if (legalOperators.includes(workingOperation[workingOperation.length - 1]))
		{
			currentOperator = operator
			workingOperation = workingOperation.slice(0, workingOperation.length - 1) + operator
			outputArea.textContent = workingOperation
		}
		else
		{
			operate(workingOperation, currentOperator)
			currentOperator = operator
			workingOperation += operator
			outputArea.textContent = workingOperation
		}
	}
}

// Event listeners for all keys on the calculator.

numberInputs.forEach (function (button) {
	button.addEventListener('click', () => appendNumber(button.textContent))
})

operatorInputs.forEach (function (button) {
	button.addEventListener('click', () => appendOperator(button.textContent))
})

periodKey.addEventListener('click', () => appendPeriod(workingOperation))

backspaceKey.addEventListener('click', () => backspace(workingOperation))

clearAllKey.addEventListener('click', clearAll)

enterKey.addEventListener('click', () => operate(workingOperation, currentOperator))