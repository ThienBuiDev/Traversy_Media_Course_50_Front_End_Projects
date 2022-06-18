const loveElement = document.querySelector('.love-me')
var count = 0
loveElement.ondblclick = (e) => {
	const rect = loveElement.getBoundingClientRect()
	const x = e.clientX - rect.left
	const y = e.clientY - rect.top

	const heartElement = document.createElement('i')
	heartElement.classList.add('fas', 'fa-heart', 'heart')
	heartElement.style.left = `${x}px`
	heartElement.style.top = `${y}px`
	loveElement.append(heartElement)
	setTimeout(() => {
		heartElement.remove()
	}, 1500)

	count++
	document.getElementById('times').innerText = count
}
