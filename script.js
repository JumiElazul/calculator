// ------------------- Assigning variables to keys/areas for later selection. -------------------

const numberInputs = document.querySelectorAll('.input-number')
const operatorInputs = document.querySelectorAll('.input-operator')

const periodKey = document.querySelector('.input-period')
const backspaceKey = document.querySelector('.input-clear')
const clearAllKey = document.querySelector('.input-clear-all')
const enterKey = document.querySelector('.input-enter-key')

const outputArea = document.querySelector('.output-text')

// ------------------- Defining legal keyboard keys and global variables. -------------------

let legalKeys = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	'/', '*', '-', '+', '.', '%', 'Enter', 'Backspace', 'Escape',
]

let legalOperators = ['+', '-', '*', '/', '%']

let workingCalculation = ''
let periodUsed = false
let currentOperator = null

// -------- Functions to update display and check for valid inputs from other functions. ---------

function updateDisplay() {
	if (workingCalculation.length == 0) {
		outputArea.textContent = '0'
	}
	else {
		outputArea.textContent = workingCalculation
	}
}

function isValidInput(input) {
	// Cases where the input is a number

	if (!isNaN(input)) {

		if (input === '0' && workingCalculation.length === 0) {
			return false;
		}
		else {
			return true;
		}
	}

	// Cases where the input is an operator

	else {
		const length = workingCalculation.length

		// Letting the first number be negative

		if (length == 0 && input == '-') {
			return true;
		}
		else if (length > 0 && !legalOperators.includes(workingCalculation[length - 1])) {
			return true;
		}
		else {
			return false;
		}
	}
}

// --------------- Functions to clear the calculator entirely, and backspace. ---------------

function clearAll() {
	workingCalculation = ''
	currentOperator = null
	periodUsed = false
	updateDisplay()
}

function backspace(input) {
	const length = workingCalculation.length

	if (legalOperators.includes(workingCalculation[length - 1])) {
		return;
	}

	if (input.length > 0 && legalKeys.includes(input[input.length - 1])) {
		if (workingCalculation[workingCalculation.length - 1] == '.') {
			periodUsed = false
		}

		workingCalculation = workingCalculation.slice(0, workingCalculation.length - 1)
		updateDisplay()
	}
}

// ------------------- Functions for all the math the calculator will use. -------------------

function add(num1, num2) {
	return num1 + num2
}

function subtract(num1, num2) {
	return num1 - num2
}

function multiply(num1, num2) {
	return num1 * num2
}

function divide(num1, num2) {
	return num1 / num2
}

function mod(num1, num2) {
	return (num1 % num2 + num2) % num2
}

function operate(calculation, operator) {
	// Disallowing clicking of enter without any input
	if (calculation.length === 0 || currentOperator === null) {
		return;
	}

	let result = 0
	let parts = calculation.split(operator)

	// Error check for if only one number has been input
	if (parts[1] == '') {
		return;
	}
	else if (parts.length < 3 && parts[0] == '' && operator == '-') {
		return;
	}

	let num1 = 0
	let num2 = 0

	// If length of array is > 2, two negative numbers are in calculation.

	if (parts.length > 2) {
		// Flip the negativity.
		num1 = `-${parts[1]}`
		num1 = parseFloat(num1)
		num2 = parseFloat(parts[2])
	}
	else {
		num1 = parseFloat(parts[0])
		num2 = parseFloat(parts[1])
	}

	switch (operator) {
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

	workingCalculation = result.toString()
	currentOperator = null
	updateDisplay()

}

// ------------------- Functions for appending numbers and operators to the display. -------------------

function appendNumber(number) {
	if (isValidInput(number)) {
		workingCalculation += number
		updateDisplay()
	}
}

function appendOperator(operator) {
	if (isValidInput(operator)) {
		let operateCounter = 0

		if (workingCalculation[0] == '-') {
			operateCounter = 1
		}

		for (let i = 0; i < workingCalculation.length; i++) {
			if (legalOperators.includes(workingCalculation[i])) {
				operateCounter++
			}
		}

		if (operateCounter == 1) {
			operate(workingCalculation, currentOperator)
			currentOperator = operator
		}
		else if (operateCounter > 2) {
			operate(workingCalculation, currentOperator)
			currentOperator = operator
		}

		periodUsed = false
		workingCalculation += operator
		currentOperator = operator
		updateDisplay()
	}
	else {
		if (workingCalculation.length > 1) {
			workingCalculation = workingCalculation.slice(0, workingCalculation.length - 1)
			workingCalculation += operator
			currentOperator = operator
			updateDisplay()
		}
	}
}

function appendPeriod(calculation) {
	if (periodUsed === false) {
		workingCalculation += '.'
		periodUsed = true
		updateDisplay()
	}
}








// ------------------- Keyboard Event Listeners -------------------

function keyboardEventHandler(e) {
	const key = e.key

	if (legalKeys.includes(key)) {

		if (!isNaN(key)) {

			numberInputs.forEach(function (button) {
				if (button.textContent == key) {
					button.classList.remove('animate-number-button-class')

					setTimeout(function () {
						button.classList.add('animate-number-button-class')
					}, 5)
				}
			})

			appendNumber(key)
		}
		else {
			let oper = null
			switch (key) {
				case '+':
					oper = document.getElementById('plus-but')

					oper.classList.remove('animate-operator-button-class')

					setTimeout(function () {
						oper.classList.add('animate-operator-button-class')
					}, 5)
					appendOperator('+')
					break

				case '-':
					oper = document.getElementById('minus-but')

					oper.classList.remove('animate-operator-button-class')

					setTimeout(function () {
						oper.classList.add('animate-operator-button-class')
					}, 5)
					appendOperator('-')
					break

				case '*':
					oper = document.getElementById('star-but')

					oper.classList.remove('animate-operator-button-class')

					setTimeout(function () {
						oper.classList.add('animate-operator-button-class')
					}, 5)
					appendOperator('*')
					break

				case '/':
					oper = document.getElementById('divide-but')

					oper.classList.remove('animate-operator-button-class')

					setTimeout(function () {
						oper.classList.add('animate-operator-button-class')
					}, 5)
					appendOperator('/')
					break

				case '%':
					oper = document.getElementById('mod-but')

					oper.classList.remove('animate-operator-button-class')

					setTimeout(function () {
						oper.classList.add('animate-operator-button-class')
					}, 5)
					appendOperator('%')
					break

				case '.':
					periodKey.classList.remove('animate-number-button-class')

					setTimeout(function () {
						periodKey.classList.add('animate-number-button-class')
					}, 5)
					appendPeriod(workingCalculation)
					break

				case 'Enter':
					enterKey.classList.remove('animate-enter-button-class')

					setTimeout(function () {
						enterKey.classList.add('animate-enter-button-class')
					}, 5)
					operate(workingCalculation, currentOperator)
					break

				case 'Backspace':
					backspaceKey.classList.remove('animate-clear-button-class')

					setTimeout(function () {
						backspaceKey.classList.add('animate-clear-button-class')
					}, 5)
					backspace(workingCalculation)
					break

				case 'Escape':
					clearAllKey.classList.remove('animate-clear-button-class')

					setTimeout(function () {
						clearAllKey.classList.add('animate-clear-button-class')
					}, 5)
					clearAll()
			}
		}
	}
}

// ------------------- Mouse Event listeners -------------------

numberInputs.forEach(function (button) {
	button.addEventListener('click', () => appendNumber(button.textContent))
})

operatorInputs.forEach(function (button) {
	button.addEventListener('click', () => appendOperator(button.textContent))
})

periodKey.addEventListener('click', () => appendPeriod(workingCalculation))

backspaceKey.addEventListener('click', () => backspace(workingCalculation))

clearAllKey.addEventListener('click', clearAll)

enterKey.addEventListener('click', () => operate(workingCalculation, currentOperator))

numberInputs.forEach(function (button) {
	button.addEventListener('click', () => {
		button.classList.remove('animate-number-button-class')

		setTimeout(function () {
			button.classList.add('animate-number-button-class')
		}, 5)
	})
})

periodKey.addEventListener('click', () => {
	periodKey.classList.remove('animate-number-button-class')

	setTimeout(function () {
		periodKey.classList.add('animate-number-button-class')
	}, 5)
})

operatorInputs.forEach(function (button) {
	button.addEventListener('click', () => {
		button.classList.remove('animate-operator-button-class')

		setTimeout(function () {
			button.classList.add('animate-operator-button-class')
		}, 5)
	})
})

enterKey.addEventListener('click', () => {
	enterKey.classList.remove('animate-enter-button-class')

	setTimeout(function () {
		enterKey.classList.add('animate-enter-button-class')
	}, 5)
})

clearAllKey.addEventListener('click', () => {
	clearAllKey.classList.remove('animate-clear-button-class')

	setTimeout(function () {
		clearAllKey.classList.add('animate-clear-button-class')
	}, 5)
})

backspaceKey.addEventListener('click', () => {
	backspaceKey.classList.remove('animate-clear-button-class')

	setTimeout(function () {
		backspaceKey.classList.add('animate-clear-button-class')
	}, 5)
})

window.addEventListener('keydown', keyboardEventHandler)
