const codes = document.querySelectorAll('.code')

codes[0].focus()
codes.forEach((code, idx) => {
	code.addEventListener('keydown', (e) => {
		console.log(e.keyCode)
		console.log(e.key)
		if (e.key >= 0 && e.key <= 9) {
			e.preventDefault()
			code.value = e.key
			idx <= codes.length - 1 ? codes[idx + 1].focus() : code.blur()
		} else if (e.keyCode == 39) {
			idx <= codes.length - 1 && codes[idx + 1].focus()
		} else if (e.keyCode == 37) {
			idx != 0 && codes[idx - 1].focus()
		}
	})
})
