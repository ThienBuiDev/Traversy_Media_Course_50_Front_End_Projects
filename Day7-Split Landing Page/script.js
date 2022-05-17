const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.onmouseenter = () => {
	container.classList.add('hover-left')
	container.classList.remove('hover-right')
}
right.onmouseenter = () => {
	container.classList.remove('hover-left')
	container.classList.add('hover-right')

	console.log(1)
}
container.onmouseleave = () => {
	container.classList.remove('hover-left')
	container.classList.remove('hover-right')
}
