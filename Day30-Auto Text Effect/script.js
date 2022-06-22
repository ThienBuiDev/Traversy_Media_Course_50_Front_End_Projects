const textElement = document.getElementById('text')
const speedElement = document.getElementById('speed')
const text = 'We Love Programming'

let idx = 0
let speed = 300 / speedElement.value
setTimeout(writeText, speed)
function writeText() {
	if (idx == 0) {
		textElement.innerText = ''
	}
	const newLetter = document.createElement('span')
	newLetter.innerText = text[idx]
	idx = (idx + 1) % text.length
	textElement.append(newLetter)
	setTimeout(writeText, speed)
}

speedElement.addEventListener('input', (e) => (speed = 300 / e.target.value))
