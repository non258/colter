const fs = require('fs')
const os = require('os')
const settings = require('../settings')
const exec = require('child_process').exec

function exec_dircolors () {
  const execSync = require('child_process').execSync
  const result = execSync('dircolors $HOME/.colter/dircolors.txt').toString()
  console.log(result)
}

module.exports = exec_dircolors
