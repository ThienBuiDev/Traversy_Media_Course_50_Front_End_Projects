const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
	counter.innerText = 0
	const updateCounter = (counter) => {
		const target = counter.dataset.target
		console.log(typeof target, target)
		let current = +counter.innerText
		const increment = target / 200
		const interval = setInterval(() => {
			current += increment
			counter.innerText = Math.ceil(current)
			if (current == target) clearInterval(interval)
		}, 1)
	}

	updateCounter(counter)
})
