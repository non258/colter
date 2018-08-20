#!/usr/bin/env node
const fs = require('fs')
const os = require('os')
let filename = ".colter"

function mkdot()
{
  try
  {
    let dir = fs.readdirSync(`${os.homedir()}/${filename}`)
  }
  catch(e)
  {
    fs.mkdirSync(`${os.homedir()}/${filename}`)
  }
}
