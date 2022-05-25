const tagsElement = document.getElementById('tags')
const textarea = document.querySelector('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
	createTags(e.target.value)

	if (e.key == 'Enter') {
		setTimeout(() => {
			e.target.value = ''
		}, 10)

		randomSelect()
	}
})

function createTags(input) {
	const tags = input
		.split(',')
		.filter((value) => value.trim() !== '')
		.map((value) => value.trim())
	tagsElement.innerHTML = ''
	tags.forEach((tag) => {
		const newTag = document.createElement('span')
		newTag.classList.add('tag')
		newTag.innerHTML = tag
		tagsElement.appendChild(newTag)
	})
}

function randomSelect() {
	const times = 30
	const interval = setInterval(() => {
		const randomTag = pickRandomTag()
		highlightTag(randomTag)

		setTimeout(() => {
			unHighlightTag(randomTag)
		}, 100)
	}, 100)

	setTimeout(() => {
		clearInterval(interval)
		const randomTag = pickRandomTag()
		highlightTag(randomTag)
	}, times * 100)
}

function pickRandomTag() {
	const tags = document.querySelectorAll('.tag')
	return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
	tag.classList.add('highlight')
}
function unHighlightTag(tag) {
	tag.classList.remove('highlight')
}
