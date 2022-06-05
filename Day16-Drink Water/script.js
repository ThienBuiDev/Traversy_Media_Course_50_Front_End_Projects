const smallCups = document.querySelectorAll('.cup-small')
const percentageElement = document.getElementById('percentage')
const remainedElementText = document.querySelector('#remained>span')
const remainedElement = document.querySelector('#remained')

initialize()

// function fillToCup(lastCup) {
// 	for (cup of smallCups) {
// 		cup.classList.add('full')
// 		if (cup == lastCup) {
// 			return
// 		}
// 	}
// }

function fillLargeCup() {
	let percentage = (document.querySelectorAll('.cup-small.full').length / smallCups.length) * 100
	percentageElement.innerText = `${percentage}%`

	let total = 0
	smallCups.forEach((cup, index) => {
		total += cup.classList.contains('full') ? 0 : parseInt(cup.innerText) / 1000
	})
	total = Number.isInteger(total) ? total + '.0' : total.toString()
	remainedElementText.innerHTML = `${total} L`
	percentageElement.style.height = `${percentage}%`
}

// function emptyAllCups() {
// 	smallCups.forEach((cup) => cup.classList.remove('full'))
// }

function initialize() {
	fillLargeCup()

	smallCups.forEach((cup, index) => {
		cup.addEventListener('click', () => {
			if (cup.classList.contains('full') && (index == smallCups.length - 1 || !cup.nextElementSibling.classList.contains('full'))) {
				cup.classList.remove('full')
			} else {
				smallCups.forEach((cup2, index2) => {
					if (index2 <= index) {
						cup2.classList.add('full')
					} else cup2.classList.remove('full')
				})
			}
			fillLargeCup()
		})
	})
}
