const nav = document.getElementById('nav')
const button = document.querySelector('button')
button.onclick = (e) => {
	nav.classList.toggle('active')
}
