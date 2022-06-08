const leftArrow = document.getElementById('left')
const rightArrow = document.getElementById('right')
const slide = document.querySelector('.slide')
const backgroundUrls = [
	'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
	'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
	'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
	'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
	'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
]
let activeIndex = 0
changeBackground()
function changeBackground() {
	document.body.style.backgroundImage = slide.style.backgroundImage = `url(${backgroundUrls[activeIndex]})`
}

leftArrow.onclick = () => {
	activeIndex = (activeIndex + backgroundUrls.length - 1) % backgroundUrls.length
	console.log(activeIndex)
	changeBackground()
}
rightArrow.onclick = () => {
	activeIndex = (activeIndex + 1) % backgroundUrls.length
	console.log(activeIndex)

	changeBackground()
}
