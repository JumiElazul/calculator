// Assigning variables to keys/areas for later selection.

const numberInputs = document.querySelectorAll('.input-number')
const operatorInputs = document.querySelectorAll('.input-operator')

const periodKey = document.querySelector('.input-period')
const backspaceKey = document.querySelector('.input-clear')
const clearAllKey = document.querySelector('.input-clear-all')
const enterKey = document.querySelector('.input-enter-key')

const outputArea = document.querySelector('.output-text')




// Defining legal keyboard keys and global variables.

let legalKeys = [
'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
 '/', '*', '-', '+', 'Enter', 'Backspace', 'Escape',
 ]

let workingCalculation = ''
let periodUsed = false




// Functions to update display and check for valid inputs from other functions.

function updateDisplay ()
{
	if (workingCalculation.length == 0)
	{
		outputArea.textContent = '0'
	}
	else
	{
		outputArea.textContent = workingCalculation
	}
}

function isValidInput (input)
{
	// All cases where the input is a number
	if (!isNaN(input))
	{

		if (input === '0' && workingCalculation.length === 0)
		{
			return false;
		}
		else
		{
			return true;
		}

	}
	else if (input == '.')
	{
		return periodUsed == false ? true : false
	}
}





// Functions for handling all keyboard input

function keyboardEventHandler (e)
{
	const key = e.key

	if (legalKeys.includes(key))
	{
		
		if (!isNaN(key))
		{
			appendNumber(key)
		}
		else
		{
			switch (key)
			{
				case '+':
					appendOperator('+')
					break
				case '-':
					appendOperator('-')
					break
				case '*':
					appendOperator('*')
					break
				case '/':
					appendOperator('/')
					break
				case '%':
					appendOperator('%')
					break
				case 'Enter':
					break
				case 'Backspace':
					backspace(workingCalculation)
				case 'Escape':
					clearAll()
			}
		}
	}
}





// Functions to clear the calculator entirely, and backspace.

function clearAll ()
{
	workingCalculation = ''
	periodUsed = false
	updateDisplay()
}


function backspace (input)
{
	if (input.length > 0 && legalKeys.includes(input[input.length - 1]))
	{
		workingCalculation = workingCalculation.slice(0, workingCalculation.length - 1)
		updateDisplay()
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

function operate (operand1, operand2, operator)
{

}





// Functions for appending numbers and operators to the display.

function appendNumber (number)
{
	if (isValidInput(number))
	{
		workingCalculation += number
		updateDisplay()
	}
}

function appendOperator (operator)
{

}

function appendPeriod (calculation)
{
	if (isValidInput(calculation))
	{
		workingCalculation += '.'
		periodUsed = true
		updateDisplay()
	}
}





// Event listeners for all keys on the calculator.

numberInputs.forEach (function (button) {
	button.addEventListener('click', () => appendNumber(button.textContent))
})

operatorInputs.forEach (function (button) {
	button.addEventListener('click', () => console.log("Operator"))
})

periodKey.addEventListener('click', () => appendPeriod(workingCalculation))

backspaceKey.addEventListener('click', () => backspace(workingCalculation))

clearAllKey.addEventListener('click', clearAll)

enterKey.addEventListener('click', () => console.log("Enter Key"))

window.addEventListener('keydown', keyboardEventHandler)

const consoleButton = document.querySelector(".console-button")

consoleButton.addEventListener('click', () => console.log(workingCalculation))