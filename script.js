// Assigning variables to all parts of the HTML that will either be clicked, or show input 
// or output to the user.

const numberInputs = document.querySelectorAll('.input-number')
const operatorInputs = document.querySelectorAll('.input-operator')

const periodKey = document.querySelector('.input-period')
const backspaceKey = document.querySelector('.input-clear')
const clearAllKey = document.querySelector('.input-clear-all')
const enterKey = document.querySelector('.input-enter-key')

const outputArea = document.querySelector('.output-text')

// Defining legal keyboard keys to take input from

let legalKeys = [
'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
 '/', '*', '-', '+', 'Enter', 'Backspace', 'Escape',
 ]

let workingCalculation = ''

function validInput (input)
{
	// If the input is a number.
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
}

function updateDisplay ()
{
	outputArea.textContent = workingCalculation
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
					break
				case '-':
					break
				case '*':
					break
				case '/':
					break
				case '%':
					break
				case 'Enter':
					break
				case 'Backspace':
					break
				case 'Escape':
					break
			}
		}
	}
}

// Functions to clear the calculator entirely, backspace, and append a period.

function clearAll ()
{

}


function backspace (input)
{
	if (input.length > 0 && legalKeys.includes(input[input.length - 1]))
	{
		workingCalculation = workingCalculation.slice(0, workingCalculation.length - 1)
		updateDisplay()
	}
}

function appendPeriod ()
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

// Functions for appending numbers and operators to the display.

function appendNumber (number)
{
	if (validInput(number))
	{
		workingCalculation += number
		updateDisplay()
	}
}

function appendOperator (operator)
{

}






// Event listeners for all keys on the calculator.

numberInputs.forEach (function (button) {
	button.addEventListener('click', () => appendNumber(button.textContent))
})

operatorInputs.forEach (function (button) {
	button.addEventListener('click', () => console.log("Operator"))
})

periodKey.addEventListener('click', () => console.log("Period"))

backspaceKey.addEventListener('click', () => backspace(workingCalculation))

clearAllKey.addEventListener('click', () => console.log("Clear All"))

enterKey.addEventListener('click', () => console.log("Enter Key"))

window.addEventListener('keydown', keyboardEventHandler)