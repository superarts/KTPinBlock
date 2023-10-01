#!/usr/bin/env node

// import { ktpinblock-ktpinblock } from "ktpinblock-ktpinblock";

const kotlin = require('ktpinblock-ktpinblock')

/*
const {
  Des,
  Aes,
  TripleDes,
  pinBlock,
  pinBlockFormat0,
} = require("data-crypto");
*/

const pan = "1111222233334444";
const pin = "1234";

console.log("PAN: " + pan)
console.log("PIN: " + pin)

console.log('encoding...')

// console.log(JSON.stringify(kotlin, null, 4))
// console.log(Object.keys(kotlin))
const ktpinblock = new kotlin.org.superarts.ktpinblock.PinBlock
const format = kotlin.org.superarts.ktpinblock.format.PinBlockFormat
//console.log("PinBlock: %o", ktpinblock)
//console.log("PinBlock: %o", kotlin.org.superarts.ktpinblock.PinBlock.prototype)
//console.log(Object.getOwnPropertyNames(kotlin.org.superarts.ktpinblock.PinBlock))
//console.log("PinBlockFormat: %o", kotlin.org.superarts.ktpinblock.format.PinBlockFormat.ISO3)
//const block = kotlin.org.superarts.ktpinblock.PinBlock.prototype.encode(pan, pin, kotlin.org.superarts.ktpinblock.format.PinBlockFormat.ISO3)
const block0 = ktpinblock.encode(pan, pin, format.ISO0)
const block1 = ktpinblock.encode(null, pin, format.ISO1)
const block2 = ktpinblock.encode(null, pin, format.ISO2)
const block3 = ktpinblock.encode(pan, pin, format.ISO3)
console.log("iso0: " + block0)
console.log("iso1: " + block1)
console.log("iso2: " + block2)
console.log("iso3: " + block3)