// TODO: refactor this terrible JS code.

// Encode all
function calculateAll() {
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

    var pinBlock = document.getElementById("inputDecodePinBlockIso0").value
    var pan = document.getElementById("inputDecodePanIso0").value
    try {
        document.getElementById("resultDecodeIso0").innerHTML = ktpinblock.decodePinBlock(pinBlock, pan, format.ISO0)
    } catch (error) {
        document.getElementById("resultDecodeIso0").innerHTML = error.message
    }

    var pinBlock = document.getElementById("inputDecodePinBlockIso1").value
    var pan = document.getElementById("inputDecodePanIso1").value
    try {
        document.getElementById("resultDecodeIso1").innerHTML = ktpinblock.decodePinBlock(pinBlock, null, format.ISO1)
    } catch (error) {
        document.getElementById("resultDecodeIso1").innerHTML = error.message
    }

    var pinBlock = document.getElementById("inputDecodePinBlockIso2").value
    var pan = document.getElementById("inputDecodePanIso2").value
    try {
        document.getElementById("resultDecodeIso2").innerHTML = ktpinblock.decodePinBlock(pinBlock, null, format.ISO2)
    } catch (error) {
        document.getElementById("resultDecodeIso2").innerHTML = error.message
    }

    var pinBlock = document.getElementById("inputDecodePinBlockIso3").value
    var pan = document.getElementById("inputDecodePanIso3").value
    try {
        document.getElementById("resultDecodeIso3").innerHTML = ktpinblock.decodePinBlock(pinBlock, pan, format.ISO3)
    } catch (error) {
        document.getElementById("resultDecodeIso3").innerHTML = error.message
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

    document.getElementById("inputDecodePanIso0").value = pan
    document.getElementById("inputDecodePanIso1").value = null
    document.getElementById("inputDecodePanIso2").value = null
    document.getElementById("inputDecodePanIso3").value = pan

    document.getElementById("inputDecodePinBlockIso0").value = "041226DDDCCCCBBB"
    document.getElementById("inputDecodePinBlockIso1").value = "1412344BDC3D0DE0"
    document.getElementById("inputDecodePinBlockIso2").value = "241234FFFFFFFFFF"
    document.getElementById("inputDecodePinBlockIso3").value = "341226DF55C982F9"
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

    document.getElementById("inputDecodePanIso0").value = pan
    document.getElementById("inputDecodePanIso1").value = null
    document.getElementById("inputDecodePanIso2").value = null
    document.getElementById("inputDecodePanIso3").value = pan

    document.getElementById("inputDecodePinBlockIso0").value = "0412AC89ABCDEF67"
    document.getElementById("inputDecodePinBlockIso1").value = "141234CE8C767872"
    document.getElementById("inputDecodePinBlockIso2").value = "241234FFFFFFFFFF"
    document.getElementById("inputDecodePinBlockIso3").value = "3412ACC9B98CDF43"
}

window.prefill1 = prefill1
window.prefill2 = prefill2
window.calculateAll = calculateAll