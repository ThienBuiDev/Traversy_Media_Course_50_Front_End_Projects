document.querySelectorAll('.faq-toggle').forEach((element) => {
	element.addEventListener('click', toggleParentActive)
})

function toggleParentActive() {
	this.parentNode.classList.toggle('active')
}
