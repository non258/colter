#!/usr/bin/env node
let argv = require('argv');
let package = require('../package.json');

argv.option([{
  name: 'none',
  short:'n',
  type: 'string',
  description:'テスト表示',
  example: "'colter --none' or 'colter -n'"
},

{
  name: 'vvvv',
  short:'v',
  type: 'string',
  description:'バージョンの表示',
  example: "'colter --version' or 'colter -v'"
}]);

argv.version(package.version);

module.exports = argv
