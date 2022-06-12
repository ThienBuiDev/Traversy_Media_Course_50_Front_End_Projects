const btn = document.getElementById('btn')
const toasts = document.getElementById('toasts')

const messages = ['Notification One', 'Notification Two', 'Notification Three', 'Notification Four']

const colors = ['green', 'red', 'blueviolet']

btn.addEventListener('click', () => {
	const noti = document.createElement('div')
	noti.className = `toast ${colors[Math.floor(Math.random() * colors.length)]}`
	noti.innerText = messages[Math.floor(Math.random() * messages.length)]
	toasts.append(noti)

	setTimeout(() => {
		noti.remove()
	}, 5000)
})
