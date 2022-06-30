const imgs = document.querySelectorAll('img')
const lis = document.querySelectorAll('li')
lis.forEach((li, idx) => {
	li.addEventListener('click', () => {
		clear()
		li.classList.add('active')
		imgs[idx].classList.add('show')
	})
})

function clear() {
	lis.forEach((li) => li.classList.remove('active'))
	imgs.forEach((img) => img.classList.remove('show'))
}
