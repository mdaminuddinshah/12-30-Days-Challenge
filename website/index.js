const http = require("http")
const fs = require("fs")
const path = require("path")

const filePath1 = path.join(__dirname, "./pages", "./index.html")
const filePath2 = path.join(__dirname, "./pages", "./project.html")
const filePath3 = path.join(__dirname, "./pages", "./error.html")
const cssPath = path.join(__dirname, "./style", "./style.css") 
const scriptPath = path.join(__dirname, "./script", "./script.js")

const readFile1 = fs.readFileSync(filePath1,"utf-8")
const readFile2 = fs.readFileSync(filePath2,"utf-8")
const readFile3 = fs.readFileSync(filePath3,"utf-8")
const readCssFile = fs.readFileSync(cssPath, "utf-8")
const readScriptFile = fs.readFileSync(scriptPath, "utf-8")

const server1 = http.createServer((req,res) => {
    
    const url = req.url.toLowerCase()
    console.log(url)
    console.log(readCssFile)

    if(url == "/style.css"){
        res.writeHead(200, {"content-type":"text/css"})
        res.write(readCssFile)
        res.end()
        return
    }

    if(url == "/script.js"){
        res.writeHead(200, {"content-type": "text/javascript"})
        res.write(readScriptFile)
        res.end()
        return
    }

    if(url == "/"){
        res.writeHead(200, {"content-type": "text/html"})
        res.write(readFile1)
        res.end()
        console.log(readFile1)
        return
    }

    if(url == "/project"){
        res.writeHead(200, {"content-type": "text/html"})
        res.write(readFile2)
        res.end()
        console.log(readFile2)
        return
    }

    else{
        res.writeHead(200, {"content-type": "text/html"})
        res.write(readFile3)
        res.end()
        console.log(readFile3)
        return
    }
    
})

server1.listen(1234, function(){
    console.log("the server 1234 is running")
})