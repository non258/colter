const http = require('http')
const server = http.createServer()
const os = require('os')
const fs = require('fs')
const querystring = require('querystring')
const read_config_req = require("./read_config_req")

function build_server() {
  server.on('request', 
    (req, res)  => {
      res.writeHead(200, {'Content-Type' : 'text/html'})
      if (req.url == '/') {
        fs.readFile(`${require('path').dirname(require.main.filename)}/config_browser/index.html`, 'utf-8', 
          (err, data) => {
            res.write(data)
            res.end()
          })

      } else if (req.url == '/post') {
        // res.write('post color')
        req.on('data', data => {
          color_data = querystring.parse(data.toString())
          console.log(color_data.req_coloer);

          // TODO: 受け取った値をcolterに渡し設定ファイルを書きかえる
          //     : 別途関数を作成する -> read_confg_req
          read_config_req(color_data.req_coloer)

          res.writeHead(301, {Location: '/'})
          res.end()
        })
      }
    }
  )


  server.listen(8080, 'localhost')
}

module.exports = build_server
