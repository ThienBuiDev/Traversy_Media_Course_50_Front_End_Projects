const container = document.getElementById('container')
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
	const square = document.createElement('div')
	square.classList.add('square')
	container.append(square)
}

var squares = document.querySelectorAll('.square')
squares.forEach(
	(square) =>
		(square.onmouseover = () => {
			let randomColor = Math.floor(Math.random() * 16777215).toString(16)

			square.style.setProperty('--random-color', `#${randomColor}`)
		}),
)
