#!/usr/bin/env node

const argv = require('argv');
const opt = require("./options");
const ch = require("chalk");
const chalk_convert = require("./utility/chalk_convert")
const convert_dircolors = require("./utility/convert_dircolors")
const mkdotfile = require("./utility/mkdotfile")
const print_dircolors = require("./utility/print_dircolors")
const reset_settings = require('./utility/reset_settings')
const create_color = require("./utility/create_color")
const save_settings = require('./utility/save_settings')
const get_dircolors_settings = require('./utility/get_dircolors_settings')
const convert_JSON = require('./utility/convert_JSON')
const ls = require('./utility/ls')
const confirm = require('prompt-confirm');
const build_server = require('./utility/build_server')
const open_brows = require('./utility/open_brows')

let data = opt.run()


if (data.options.config) {
  process.stdin.on('data', chunk => {
     if(chunk == '\n') {
       console.log('close')
       process.exit(0)
     }
  })

  build_server()
  open_brows(8080)
  return
}

if (data.options.init) {
  mkdotfile();
  get_dircolors_settings()
  print_dircolors()
  return
}

if (data.options.ls) {
  ls(data.options.ls === 'true' ? './' : data.options.ls)
  return
}

if (data.options.reset) {
  new confirm('reset!?')
    .run()
    .then((answer) => {
      if (answer) {
        reset_settings()
        get_dircolors_settings()
      }
    })
  return
}

if (data.targets.length == 0) {
  argv.help()
  return
}

let pattern = data.targets[0]
let color = data.targets[1]

let chalk = create_color(color, data.options)
if (chalk == undefined) {
  console.log('please color')
  return
}

console.log("pattern: " + pattern)
console.log("color: " + color)
// console.log(chalk_convert(ch.hex(pattern).bgHex("#000")))

if (pattern) {
  let set_colors = get_dircolors_settings()
  set_colors = convert_dircolors(set_colors)
  set_colors[pattern] = chalk_convert(chalk)
  set_colors = convert_JSON(set_colors)
  save_settings(set_colors)
}
