// Setting elements of the HTML files to variables so they can be easily selected.

const numberKeys = document.querySelectorAll('.input-number')
const opKeys = document.querySelectorAll('.input-operator')
const enterKey = document.querySelector('.input-enter-key')
const clearKey = document.querySelector('input-clear-all')
const current = document.querySelector('.current-input')
const output = document.querySelector('.output')

// Initializing global variables that will need to be used in calculations.

let num1 = null
let num2 = null
let operator = null
let result = null

// Functions for all basic math equations.

function addNum (num)
{
		current.textContent += num
}

function add (num1, num2)
{
	return num1 + num2
}

function subtract (num1, num2)
{
	return num1 - num2
}

function multiply (num1, num2)
{
	return num1 * num2
}

function divide (num1, num2)
{
	return num1 / num2
}



numberKeys.forEach (function (button) {
	button.addEventListener('click', () => addNum(button.textContent))
})

opKeys.forEach (function (button) {
	button.addEventListener('click', () => {
		addNum(button.textContent)
		operator = button.textContent
		
	})
})

enterKey.addEventListener('click', () => {
	const split = current.textContent.split(operator)
	num1 = parseFloat(split[0])
	num2 = parseFloat(split[1])

	if (operator == '+')
	{
		result = add(num1, num2)
	}
	else if (operator == '-')
	{
		result = subtract(num1, num2)
	}
	else if (operator == '*')
	{
		result = multiply(num1, num2)
	}
	else
	{
		result = divide(num1, num2)
	}

	output.textContent = ''
	output.textContent = result

})



























// Creating function and event listener to take keyboard input from the window.

// function keyboardPress (e)
// {
// 	const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '*', '-', '+', 'Enter']

// 	if (validKeys.includes(e.key))
// 	{
// 		keyDown = e.key
// 	}
// }

// window.addEventListener('keydown', keyboardPress)