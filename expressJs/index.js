const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()
const indexHtmlPath = path.join(__dirname, "./pages", "./index.html")
const formIndexPath = path.join(__dirname, "./pages", "./bmi-form.html")
const resultIndexPath = path.join(__dirname, "./pages", "./bmi-result.html")

const indexHtmlFile = fs.readFileSync(indexHtmlPath, "utf-8")
const bmiFormFile = fs.readFileSync(formIndexPath, "utf-8")
const resultFormFile = fs.readFileSync(resultIndexPath, "utf-8")

// untuk serve static file = css,js, images
// guna express.static(root folder)
app.use(express.static("./public"))

app.get("/", function(req,res){
    res.setHeader("content-type", "text/html");
    res.send(indexHtmlFile);
})

app.get("/bmi-form.html", function(req, res){
    res.setHeader("content-type", "text/html");
    res.send(bmiFormFile);
})

app.get("/bmi-result.html", function(req,res){
    res.setHeader("content-type", "text/html")
    res.send(resultFormFile)
})

app.post("/calculate", function(req,res){
    res.redirect("/bmi-result.html")
})

app.listen(1001)