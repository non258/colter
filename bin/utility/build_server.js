const http = require('http')
const server = http.createServer()
const fs = require('fs')

function build_server() {
  server.on('request', response)

  function response(req, res) {
    fs.readFile('./index.html', 'utf-8', filedata)
    function filedata(err, data){
      res.writeHead(200, {'Content-Type' : 'text/html'})
      res.write(data)
      res.end()
    }
  }

  server.listen(8080, 'localhost')
}

module.exports = build_server
