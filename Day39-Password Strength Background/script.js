const password = document.getElementById('password')
const background = document.querySelector('#background')
const backgroundAfter = window.getComputedStyle(background, '::after')
password.addEventListener('input', (e) => {
	const input = e.target.value
	const length = input.length
	const blurValue = 10 - length
	background.style.setProperty('--backdrop-blur', `${blurValue}px`)
	// backgroundAfter.setProperty('backdrop-filter', `blur(${blurValue}px)`)
})
