const resultElement = document.getElementById('result')
const lengthElement = document.getElementById('length')
const uppercaseElement = document.getElementById('uppercase')
const lowercaseElement = document.getElementById('lowercase')
const numbersElement = document.getElementById('numbers')
const symbolsElement = document.getElementById('symbols')
const generateElement = document.getElementById('generate')
const clipboardElement = document.getElementById('clipboard')

clipboardElement.addEventListener('click', () => {
	let textToCopy = resultElement.innerText
	if (navigator.clipboard) {
		navigator.clipboard.writeText(textToCopy).then(() => {
			alert('Copied to clipboard')
		})
	} else {
		console.log('Browser Not compatible')
	}
})

generateElement.addEventListener('click', () => {
	const length = +lengthElement.value
	const lower = lowercaseElement.checked
	const upper = uppercaseElement.checked
	const number = numbersElement.checked
	const symbol = symbolsElement.checked

	let generatedPassword = ''
	const typesObject = {
		lower,
		upper,
		number,
		symbol,
	}

	const typesArr = []
	lower && typesArr.push('lower')
	upper && typesArr.push('upper')
	number && typesArr.push('number')
	symbol && typesArr.push('symbol')
	for (var i = 0; i < length; i++) {
		generatedPassword += randomFunc[typesArr[i % typesArr.length]]()
	}

	resultElement.innerText = generatedPassword
})

lengthElement.addEventListener('keydown', (e) => {
	// e.preventDefault()

	if (+(lengthElement.value + e.key) > 20) {
		e.preventDefault()
		return
	}
	if (!isNaN(e.key)) {
		e.preventDefault()
		lengthElement.value += e.key
	}
})

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>,/.'
	return symbols[Math.floor(Math.random() * symbols.length)]
}
