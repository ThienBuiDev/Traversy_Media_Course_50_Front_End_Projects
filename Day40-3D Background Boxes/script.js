const boxes = document.querySelectorAll('.box')
const boxContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

console.log(boxes)
boxes.forEach((box, idx) => {
	box.style.backgroundPosition = `${-125 * (idx % 4)}px ${-125 * Math.floor(idx / 4)}px`
})

btn.onclick = () => {
	boxContainer.classList.toggle('big')
}
