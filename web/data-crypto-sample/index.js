#!/usr/bin/env node

import { Des, Aes, TripleDes, pinBlock, pinBlockFormat3 } from "data-crypto";

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

const block = pinBlockFormat3(pan, pin);
console.log(block)

console.log('done')