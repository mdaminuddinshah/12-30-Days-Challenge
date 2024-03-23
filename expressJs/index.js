const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()
const indexHtmlPath = path.join(__dirname, "./pages", "./index.html")
const formIndexPath = path.join(__dirname, "./pages", "./bmi-form.html")

const indexHtmlFile = fs.readFileSync(indexHtmlPath, "utf-8")
const bmiFormFile = fs.readFileSync(formIndexPath, "utf-8")

app.use(express.static("./public"))

app.get("/", function(req,res){
    res.setHeader("content-type", "text/html");
    res.send(indexHtmlFile);
    console.log(indexHtmlFile);
})

app.get("/bmi-form.html", function(req, res){
    res.setHeader("content-type", "text/html");
    res.send(bmiFormFile);
})

app.listen(1001)