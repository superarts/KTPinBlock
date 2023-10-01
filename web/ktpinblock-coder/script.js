function getIso3() {
    const kotlin = require('ktpinblock-ktpinblock')
    const ktpinblock = new kotlin.org.superarts.ktpinblock.PinBlock
    const format = kotlin.org.superarts.ktpinblock.format.PinBlockFormat

    var pan = document.getElementById("inputPan").value
    var pin = document.getElementById("inputPin").value
    document.getElementById("paragraph").innerHTML = pan//ktpinblock.encode(pan, pin, format.ISO3)
}

window.getIso3 = getIso3