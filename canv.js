let canvas = document.getElementById('main')
let ctx = canvas.getContext('2d')

let height = canvas.height
let width = canvas.width
let radius = height / 2 //hacky
let center = {
    x: width / 2,
    y: height / 2
}

reset()

function reset() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(center.x, center.y, radius / 50, 0, 2 * Math.PI, false)
    ctx.fillStyle = 'black'
    ctx.fill()
}

function drawLine(x,y,color) {
    x = transformCoordX(x * 1000)
    y = transformCoordY(y * 1000)
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = color;
    ctx.stroke();
}

function draw(tri) {
    let resultant = calcResultant()
    drawLine(calcX(resultant.angle, resultant.mag), calcY(resultant.angle, resultant.mag), resultant.color)
    if (tri.constructor === Array)
        tri.forEach(el => {
            drawLine(calcX(el.angle, el.mag), calcY(el.angle, el.mag), '#000000')
        }, this)
    else
        drawLine(calcX(tri.angle, tri.mag), calcY(tri.angle, tri.mag), tri.color)
}

function transformCoordX(x) {
    return center.x + x
}

function transformCoordY(y) {
    return center.y - y
}