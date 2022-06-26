const numbers = document.querySelectorAll('.numbers span')
const counter = document.querySelector('.counter')
const replayButton = document.getElementById('replay')

runAnimation()
replayButton.onclick = runAnimation

async function runAnimation() {
	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

	counter.classList.remove('hide')

	for (let i = 0; i < numbers.length; i++) {
		numbers[i].classList.add('in')
		await sleep(1000)
	}
	numbers.forEach((number) => number.classList.remove('in'))
	await sleep(500)
	counter.classList.add('hide')
}
