#!/usr/bin/env node
const fs = require('fs')
const os = require('os')
const settings = require('../settings')

function mkdotfile()
{
  try
  {
    let dir = fs.readdirSync(`${os.homedir()}/${settings.rc}`)
  }
  catch(e)
  {
    fs.mkdirSync(`${os.homedir()}/${settings.rc}`)
  }
}

module.exports = mkdotfile
