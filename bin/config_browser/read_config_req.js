function read_config_req (colter_req) {
  const execSync = require('child_process').execSync
  const result =  execSync(`${colter_req}`).toString()
}

module.exports = read_config_req
