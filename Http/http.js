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
server1.listen(8000)

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

// send HTML content to client-side
const test1 = http.createServer((req,res) => {
    res.writeHead(200, {"content-type": "text/html"})
    res.write(`<h2 style="text-align:center">hello amin</h2>`)
    res.end()
})

test1.listen(1000)

// send json file to client-side
const test2 = http.createServer((req,res) => {
    res.writeHead(200, {"content-type": "application/json"})
    res.write(JSON.stringify({name:"amin", hobi: {
        rumah: "coding",
        luarRumah: "cycling",
        weekend: "read books"
    }}))
    res.end()
})

test2.listen(1001)

// how to get url and set different url with different HTML content to client-side
const server4 = http.createServer((req,res) => {
    const url = req.url.toLowerCase()
    console.log(url)

    // 127.0.0.1:1002/
    if(url == "/"){
        res.writeHead(200, {"content-type": "text/html"})
        res.write(`<h3 style="text-align:center; color:gray">This is Home</h3>`)
        res.end()
        return
         // return use here to stop function execution
    }

    // 127.0.0.1:1002/about
    if(url == "/about"){
        res.writeHead(200, {"content-type": "text/html"})
        res.write(`<h3 style="text-align:center; color:brown">This is About</h3>`)
        res.end()
        return
         // return use here to stop function execution
    }

    // 127.0.0.1:1002/youtube
    if(url == "/youtube"){
        res.writeHead(301, {Location: "https://www.youtube.com/watch?v=wM3TEvQn2hw"})
        res.end()
        return
        // return use here to stop function execution
    }

    // 127.0.0.1:1002/data
    if(url == "/data"){
        res.writeHead(200, {"content-type": "application/json"})
        res.write(JSON.stringify({sport: "badminton", drinks: "soya", meal: "kebab daging"}))
        res.end()
        return
    }
    
    res.writeHead(404, {"content-type": "text/html"})
    res.write(`<h1>page not found</h1>`)
    res.end()
})

server4.listen(1002)