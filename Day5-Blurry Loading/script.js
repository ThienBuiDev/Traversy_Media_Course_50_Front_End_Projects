const bgOverlay = document.querySelector('.bg-overlay')
console.log(bgOverlay)
const loadingText = document.querySelector('.loading-text')

let load = 0

function loading() {
	load++
	loadingText.innerHTML = `${load}%`
	loadingText.style.opacity = `${1 - load / 100}`
	bgOverlay.style.backdropFilter = `blur(${10 - load / 10}px)`
	if (load == 100) clearInterval(intervalID)
}

let intervalID = setInterval(loading, 30)
