#!/usr/bin/env node

const opt = require("./options");
const ch = require("chalk");
const chalk_convert = require("./utilty/convert");
let data = opt.run();
let pattern = data.targets[0];
let color = data.targets[1];


if (data.options.init) {
  console.log("init ok")
  return
}

if (color[0] != '#') {
 color = "#" + color;
}

console.log("pattern: " + pattern);
console.log("color: " + color);
console.log(chalk_convert(ch.hex(pattern).bgHex("#000")));
