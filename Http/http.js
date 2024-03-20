const http = require("http")

// send HTML CONTENT to client-side
const server1 = http.createServer((req,res) => {
    // head
    res.writeHead(200, {"content-type":"text/html"});

    // body
    res.write(`<div style="text-align: center"><h1>Hello</h1></div>`)

    // end
    res.end()
})
server1.listen(8080)

// send data to client-side
const server2 = http.createServer((req,res) => {
    res.writeHead(200, {"content-type": "application/json"});
    res.write(JSON.stringify({name: "amin", month: "august"}));
    // res.writeHead(301, {Location:"https://www.youtube.com"})
    res.end()
})
server2.listen(8880)

// make redirectional ON 8880
const server3 = http.createServer((req,res) => {
    res.writeHead(301, {Location: "https://www.google.com"});
    res.end;
})

server3.listen(8800)

