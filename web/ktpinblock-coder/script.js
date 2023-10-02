// TODO: refactor this terrible JS code.

// Encode all
function encodeAll() {
    const kotlin = require('ktpinblock-ktpinblock')
    const ktpinblock = new kotlin.org.superarts.ktpinblock.PinBlock
    const format = kotlin.org.superarts.ktpinblock.format.PinBlockFormat

    var pan = document.getElementById("inputPanIso0").value
    var pin = document.getElementById("inputPinIso0").value
    try {
        document.getElementById("resultIso0").innerHTML = ktpinblock.encode(pan, pin, format.ISO0)
    } catch (error) {
        document.getElementById("resultIso0").innerHTML = error.message
    }

    var pan = document.getElementById("inputPanIso1").value
    var pin = document.getElementById("inputPinIso1").value
    try {
        document.getElementById("resultIso1").innerHTML = ktpinblock.encode(null, pin, format.ISO1)
    } catch (error) {
        document.getElementById("resultIso1").innerHTML = error.message
    }

    var pan = document.getElementById("inputPanIso2").value
    var pin = document.getElementById("inputPinIso2").value
    try {
        document.getElementById("resultIso2").innerHTML = ktpinblock.encode(null, pin, format.ISO2)
    } catch (error) {
        document.getElementById("resultIso2").innerHTML = error.message
    }

    var pan = document.getElementById("inputPanIso3").value
    var pin = document.getElementById("inputPinIso3").value
    try {
        document.getElementById("resultIso3").innerHTML = ktpinblock.encode(pan, pin, format.ISO3)
    } catch (error) {
        document.getElementById("resultIso3").innerHTML = error.message
    }
}

function prefill1() {
    const pan = "1111222233334444"
    const pin = "1234"
    document.getElementById("inputPanIso0").value = pan
    document.getElementById("inputPanIso1").value = null
    document.getElementById("inputPanIso2").value = null
    document.getElementById("inputPanIso3").value = pan
    document.getElementById("inputPinIso0").value = pin
    document.getElementById("inputPinIso1").value = pin
    document.getElementById("inputPinIso2").value = pin
    document.getElementById("inputPinIso3").value = pin
}

function prefill2() {
    const pan = "43219876543210987"
    const pin = "1234"
    document.getElementById("inputPanIso0").value = pan
    document.getElementById("inputPanIso1").value = null
    document.getElementById("inputPanIso2").value = null
    document.getElementById("inputPanIso3").value = pan
    document.getElementById("inputPinIso0").value = pin
    document.getElementById("inputPinIso1").value = pin
    document.getElementById("inputPinIso2").value = pin
    document.getElementById("inputPinIso3").value = pin
}

window.prefill1 = prefill1
window.prefill2 = prefill2
window.encodeAll = encodeAll