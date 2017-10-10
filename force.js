let mags = [{
        mag: 5,
        angle: 150
    },
    {
        mag: 8,
        angle: 50
    }
    /*,
        {
            mag: 0,
            angle: 0
        },
        {
            mag: 0,
            angle: 0
        }*/
]

function calcResultant() {
    let resultant = {
        mag: null,
        angle: null,
        x: 0,
        y: 0,
        color: '#f00'
    }
    mags.forEach(el => {
        resultant.x += calcX(el.angle, el.mag)
        console.log('adding ' + calcX(el.angle, el.mag) + ' to x')
        resultant.y += calcY(el.angle, el.mag)
    }, this)
    resultant.mag = pythag(resultant.x, resultant.y)
    resultant.angle = tand(resultant.y / resultant.x)
    //console.log(resultant)
    return resultant
}

function calcX(angle, magnitude) {
    return cosd(angle) * magnitude
}

function calcY(angle, magnitude) {
    return sind(angle) * magnitude
}

function sind(deg) {
    return Math.sin(deg * (Math.PI / 180))
}

function cosd(deg) {
    return Math.cos(deg * (Math.PI / 180))
}

function tand(deg) {
    return Math.tan(deg * (Math.PI / 180))
}

function atand(deg) {
    return Math.atan(deg * (Math.PI / 180))
}

function pythag(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
}

draw(mags)