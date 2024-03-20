const http = require("http")

const server = http.createServer((req,res) => {
    // head
    res.writeHead(200, {"content-type":"text/html"});

    // body
    res.write(`<div style="text-align: center"><h1>Hello</h1></div>`)

    // end
    res.end()
})

server.listen(8080)