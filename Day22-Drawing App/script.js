const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let size = 20
let color = 'black'
drawCircle(100, 100)
drawLine(100, 100, 200, 200)
function drawCircle(x, y) {
	ctx.beginPath()
	ctx.arc(x, y, size, 0, Math.PI * 2)
	ctx.fillStyle = color
	ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
	ctx.beginPath()
	ctx.moveTo(x1, y1)
	ctx.lineTo(x2, y2)

	ctx.strokeStyle = color
	ctx.lineWidth = size
	// ctx.closePath()
	// ctx.stroke()

	// ctx.moveTo(0, 0)
	// ctx.lineTo(300, 150)
	ctx.stroke()
}
