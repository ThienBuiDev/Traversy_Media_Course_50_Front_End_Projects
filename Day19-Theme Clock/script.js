const toggleButton = document.querySelector('button.toggle')
const time = document.querySelector('.time')
const date = document.querySelector('.date')
const hourNeedle = document.querySelector('.hour')
const minuteNeedle = document.querySelector('.minute')
const secondNeedle = document.querySelector('.second')

var currentTime
toggleButton.addEventListener('click', () => {
	document.documentElement.classList.toggle('dark')
	toggleButton.innerText = (document.documentElement.classList.contains('dark') && 'Light Mode') || 'Dark Mode'
})
updateTime()
function updateTime() {
	currentTime = new Date()
	time.innerHTML = `${currentTime.getHours()}:${currentTime.getMinutes()}`
	date.innerHTML = `${currentTime.toLocaleString('default', { weekday: 'long' })}, ${currentTime
		.toLocaleString('default', { month: 'long' })
		.slice(0, 3)}
  <span class="circle">${currentTime.getDate()}</span>`
	secondNeedle.style.setProperty('--rotate-angle', `${(currentTime.getSeconds() + currentTime.getMilliseconds() / 1000) * 6}deg`)
	console.log(`${(currentTime.getSeconds() + currentTime.getMilliseconds() / 1000) * 6}`)
	minuteNeedle.style.setProperty('--rotate-angle', `${currentTime.getMinutes() * 6}deg`)
	hourNeedle.style.setProperty('--rotate-angle', `${(currentTime.getHours() + currentTime.getMinutes() / 360) * 30}deg`)
	setTimeout(() => {
		updateTime()
	}, 10)
}
