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

console.log('start')

const pan = "1111222233334444";
const pin = "1234";

// console.log(JSON.stringify(kotlin, null, 4))
// console.log(Object.keys(kotlin))
console.log(kotlin.org.superarts.ktpinblock.PinBlock)
//console.log(Object.getOwnPropertyNames(kotlin.org.superarts.ktpinblock.PinBlock))
//console.log(kotlin.org.superarts.ktpinblock.format.PinBlockFormat)
//const block = kotlin.org.superarts.ktpinblock.PinBlock().encode(pan, pin, format)
//console.log(block)

console.log('done')