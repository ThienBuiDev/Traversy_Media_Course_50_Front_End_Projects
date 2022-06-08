const btn = document.querySelector('button')
const span = document.querySelector('span')

btn.onclick = (event) => {
	btn.innerHTML = 'Click Me'
	const rect = btn.getBoundingClientRect()
	const x = event.clientX - rect.left
	const y = event.clientY - rect.top
	const span = document.createElement('span')
	span.classList.add('circle')

	btn.appendChild(span)

	span.style = `left:${x}px;right:${y}px`
	console.log(span)
}
