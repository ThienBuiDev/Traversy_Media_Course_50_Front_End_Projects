const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

var currentActive = 0
next.onclick = () => {
	if (currentActive != circles.length - 1) {
		currentActive++
	}
	update()
}

prev.onclick = () => {
	if (currentActive != 0) {
		currentActive--
	}

	update()
}

function update() {
	prev.disabled = currentActive == 0
	next.disabled = currentActive == circles.length - 1
	circles.forEach((circle, index) => {
		if (index <= currentActive) {
			circle.classList.add('active')
		} else {
			circle.classList.remove('active')
		}
	})

	progress.style.width = `${(currentActive / (circles.length - 1)) * 100}%`
}

update()
