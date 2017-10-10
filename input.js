function angUpdate(el) {
    mags[el.dataset.id].angle = el.value
    reset()
    draw(mags)
    //draw(calcResultant())
}

function magUpdate(el) {
    mags[el.dataset.id].mag = el.value
    reset()
    draw(mags)
    //draw(calcResultant())
}