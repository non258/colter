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
const check_settings_init = require('./utility/check_settings_init')
const messages = require('./utility/messages')

let data = opt.run()

if (data.options.init) {
  mkdotfile();
  get_dircolors_settings()
  print_dircolors()
  return
}

if (!check_settings_init()) {
  console.log('[38;5;197m please write the setting [0m')
  console.log(' Using  bash or zsh, write on bashrc or zshrc:')
  console.log('    [38;5;14m eval $(colter --init) [0m')
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
  messages.error('please color')
  return
}

console.log("pattern: " + pattern)
console.log("color: " + color)
// console.log(chalk_convert(ch.hex(pattern).bgHex("#000")))

if (pattern) {
  let set_colors = get_dircolors_settings()
  set_colors = convert_dircolors(set_colors)
  if (Object.keys(set_colors).includes(pattern)) {
    set_colors[pattern] = chalk_convert(chalk)
    set_colors = convert_JSON(set_colors)
    save_settings(set_colors)
  } else {
    messages.error('pattern is mismatch.');
  }
}
