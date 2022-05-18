const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach((sound) => {
	const btn = document.createElement('button')
	btn.classList.add('btn')
	btn.innerText = sound
	btn.onclick = () => {
		stopAll()
		document.getElementById(sound).play()
	}
	document.getElementById('buttons').appendChild(btn)
})

function stopAll() {
	sounds.forEach((sound) => {
		document.getElementById(sound).pause()
		document.getElementById(sound).currentTime = 0
	})
}
