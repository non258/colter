#!/usr/bin/env node
const fs = require('fs')
const os = require('os')
const settings = require('../settings')

function check_settings_init()
{
  try
  {
    let dir = fs.readdirSync(`${os.homedir()}/${settings.rc}`)
    return true
  }
  catch(e)
  {
    console.log("errrrrr")
    return false
  }
}

module.exports = check_settings_init
