#!/usr/bin/env node

// import { ktpinblock-ktpinblock } from "ktpinblock-ktpinblock";

const ktpinblock = require('ktpinblock-ktpinblock')

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

console.log(JSON.stringify(ktpinblock, null, 4))
console.log(Object.keys(ktpinblock))
//const block = ktpinblock.encode(pan, pin);
//console.log(block)

console.log('done')