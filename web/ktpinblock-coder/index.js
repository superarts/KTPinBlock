#!/usr/bin/env node

const kotlin = require('ktpinblock-ktpinblock')

const pan = "1111222233334444";
const pin = "1234";

console.log("PAN: " + pan)
console.log("PIN: " + pin)

console.log('encoding...')

const ktpinblock = new kotlin.org.superarts.ktpinblock.PinBlock
const format = kotlin.org.superarts.ktpinblock.format.PinBlockFormat
const block0 = ktpinblock.encode(pan, pin, format.ISO0)
const block1 = ktpinblock.encode(null, pin, format.ISO1)
const block2 = ktpinblock.encode(null, pin, format.ISO2)
const block3 = ktpinblock.encode(pan, pin, format.ISO3)
console.log("iso0: " + block0)
console.log("iso1: " + block1)
console.log("iso2: " + block2)
console.log("iso3: " + block3)

console.log('encoding...')

console.log("iso0: " + ktpinblock.decodePinBlock(block0, pan, format.ISO0))
console.log("iso1: " + ktpinblock.decodePinBlock(block1, null, format.ISO1))
console.log("iso2: " + ktpinblock.decodePinBlock(block2, null, format.ISO2))
console.log("iso3: " + ktpinblock.decodePinBlock(block3, pan, format.ISO3))

console.log('done')