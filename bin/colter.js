#!/usr/bin/env node

let opt = require("./options");
let ch = require("chalk");
let chalk_convert = require("./utilty/convert");
let data = opt.run();
let pattern = data.targets[0];
let color = data.targets[1];

if (color[0] != '#')
{
 color = "#" + color;
}

console.log("pattern: " + pattern);
console.log("color: " + color);
console.log(chalk_convert(ch.hex(pattern).bgHex("#000")));
