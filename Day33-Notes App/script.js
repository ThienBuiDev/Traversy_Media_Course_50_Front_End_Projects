const addBtn = document.getElementById('add')

addBtn.addEventListener('click', () => {
	addNewNote()
	updateLS()
})
const localNotes = localStorage.getItem('notes')

JSON.parse(localNotes).forEach((note) => {
	addNewNote(note)
})

function addNewNote(text = '') {
	const note = document.createElement('div')
	note.classList.add('note')
	note.innerHTML = `
  <div class="tools">
				<button class="edit">
					<i class="fas fa-edit"></i>
				</button>
				<button class="delete">
					<i class="fas fa-trash-alt"></i>
				</button>
			</div>

			<div class="main ${text ? '' : 'hidden'}"></div>
			<textarea class=${text ? 'hidden' : ''}></textarea>
    `
	const editBtn = note.querySelector('.edit')
	const deleteBtn = note.querySelector('.delete')
	const main = note.querySelector('.main')
	const textArea = note.querySelector('textarea')

	textArea.value = text
	main.innerHTML = marked(text)

	editBtn.onclick = () => {
		main.classList.toggle('hidden')
		textArea.classList.toggle('hidden')
		if (textArea.classList.contains('hidden')) {
			const value = textArea.value
			main.innerHTML = marked(value)
			updateLS()
		}
	}
	deleteBtn.onclick = () => {
		note.remove()
		updateLS()
	}
	// textArea.addEventListener('change', (e) => {})

	document.body.append(note)
}

function updateLS() {
	const notesText = document.querySelectorAll('textarea')
	const notes = []
	notesText.forEach((note) => notes.push(note.value))
	localStorage.setItem('notes', JSON.stringify(notes))
}
