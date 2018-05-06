#!/usr/bin/env node

let opt = require("./options");
let data = opt.run();
let pattern = data.targets[0];
let color = data.targets[1];

if (color[0] != '#')
{
 color = "#" + color;
}

console.log("pattern: " + pattern);
console.log("color: " + color);
