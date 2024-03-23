const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()
const indexHtmlPath = path.join(__dirname, "./pages", "./index.html")
const indexHtmlFile = fs.readFileSync(indexHtmlPath, "utf-8")

app.get("/", function(req,res){
    res.setHeader("content-type", "text/html");
    res.send(indexHtmlFile);
    // console.log(indexHtmlFile)
})

app.listen(1001)