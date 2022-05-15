const search = document.querySelector('div.search')
const input = document.querySelector('input.input')

search.onmouseover = () => {
	search.classList.add('active')
	input.focus()
}

input.onblur = () => {
	search.classList.remove('active')
}
