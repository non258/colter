const http = require('http')
const server = http.createServer()
const os = require('os')
const fs = require('fs')
const querystring = require('querystring')

function build_server() {
  server.on('request', response)

  function response(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    if (req.url == '/') {
      fs.readFile(`${require('path').dirname(require.main.filename)}/utility/index.html`, 'utf-8', filedata)
      function filedata(err, data){
        res.write(data)
        res.end()
      }
    } else if (req.url == '/post') {
      // res.write('post color')
      req.on('data', data => {
        color_data = querystring.parse(data.toString())
        console.log(color_data.req_coloer);
        res.writeHead(301, {Location: '/'})
        res.end()
      })
    }
  }

  server.listen(8080, 'localhost')
}

module.exports = build_server
