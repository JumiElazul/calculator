// Keyboard Event Listeners

function keyboardEventHandler (e)
{
	const key = e.key

	if (legalKeys.includes(key))
	{
		
		if (!isNaN(key))
		{

			numberInputs.forEach (function (button) {
				if (button.textContent == key)
				{
					button.classList.remove('animate-number-button-class')

					setTimeout (function () {
						button.classList.add('animate-number-button-class')
					}, 5)
				}
			})

			appendNumber(key)
		}
		else
		{
			let oper = null
			switch (key)
			{
				case '+':
					oper = document.getElementById('plus-but')

					oper.classList.remove('animate-operator-button-class')

					setTimeout (function () {
						oper.classList.add('animate-operator-button-class')
					}, 5)
					appendOperator('+')
					break

				case '-':
					oper = document.getElementById('minus-but')

					oper.classList.remove('animate-operator-button-class')

					setTimeout (function () {
						oper.classList.add('animate-operator-button-class')
					}, 5)
					appendOperator('-')
					break

				case '*':
					oper = document.getElementById('star-but')

					oper.classList.remove('animate-operator-button-class')

					setTimeout (function () {
						oper.classList.add('animate-operator-button-class')
					}, 5)
					appendOperator('*')
					break

				case '/':
					oper = document.getElementById('divide-but')

					oper.classList.remove('animate-operator-button-class')

					setTimeout (function () {
						oper.classList.add('animate-operator-button-class')
					}, 5)
					appendOperator('/')
					break

				case '%':
					oper = document.getElementById('mod-but')

					oper.classList.remove('animate-operator-button-class')

					setTimeout (function () {
						oper.classList.add('animate-operator-button-class')
					}, 5)
					appendOperator('%')
					break

				case '.':
					periodKey.classList.remove('animate-number-button-class')

					setTimeout (function () {
						periodKey.classList.add('animate-number-button-class')
					}, 5)
					appendPeriod(workingCalculation)
					break

				case 'Enter':
					enterKey.classList.remove('animate-enter-button-class')

					setTimeout (function () {
						enterKey.classList.add('animate-enter-button-class')
					}, 5)
					operate(workingCalculation, currentOperator)
					break

				case 'Backspace':
					backspaceKey.classList.remove('animate-clear-button-class')

					setTimeout (function () {
						backspaceKey.classList.add('animate-clear-button-class')
					}, 5)
					backspace(workingCalculation)
					break

				case 'Escape':
					clearAllKey.classList.remove('animate-clear-button-class')

					setTimeout (function () {
						clearAllKey.classList.add('animate-clear-button-class')
					}, 5)
					clearAll()
			}
		}
	}
}

window.addEventListener('keydown', keyboardEventHandler)

// Mouse Event listeners

numberInputs.forEach (function (button) {
	button.addEventListener('click', () => appendNumber(button.textContent))
})

operatorInputs.forEach (function (button) {
	button.addEventListener('click', () => appendOperator(button.textContent))
})

periodKey.addEventListener('click', () => appendPeriod(workingCalculation))

backspaceKey.addEventListener('click', () => backspace(workingCalculation))

clearAllKey.addEventListener('click', clearAll)

enterKey.addEventListener('click', () => operate(workingCalculation, currentOperator))

numberInputs.forEach (function (button) {
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

operatorInputs.forEach (function (button) {
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