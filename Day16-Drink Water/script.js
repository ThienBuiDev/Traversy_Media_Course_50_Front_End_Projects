const smallCups = document.querySelectorAll('.cup-small')
const percentageElement = document.getElementById('percentage')
const remainedElementText = document.querySelector('#remained>span')
const remainedElement = document.querySelector('#remained')

initialize()

function fillToCup(lastCup) {
	for (cup of smallCups) {
		cup.classList.add('full')
		if (cup == lastCup) {
			return
		}
	}
}

function fillLargeCup() {
	let filledCup = 0
	let percentage
	smallCups.forEach((cup) => (filledCup += cup.classList.contains('full') ? 1 : 0))
	percentage = (filledCup / smallCups.length) * 100
	percentageElement.innerText = `${percentage}%`

	let total = 0
	smallCups.forEach((cup, index) => {
		total += cup.classList.contains('full') ? 0 : parseInt(cup.innerText) / 1000
	})
	total = Number.isInteger(total) ? total + '.0' : total.toString()
	remainedElementText.innerHTML = `${total} L`
	percentageElement.style.height = `${percentage}%`
}

function emptyAllCups() {
	smallCups.forEach((cup) => cup.classList.remove('full'))
}

function initialize() {
	fillLargeCup()

	smallCups.forEach((cup, index) => {
		cup.addEventListener('click', (cup2, index2) => {
			emptyAllCups()
			fillToCup(cup)
			fillLargeCup()
		})
	})
}
