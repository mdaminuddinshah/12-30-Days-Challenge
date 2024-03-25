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

// untuk retrieve data dalam body
// e.g. data dalam input
// app.use(express.json())
// so, guna app.use(express.urlencoded({extended: true}))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", function(req,res){
    res.setHeader("content-type", "text/html");
    res.send(indexHtmlFile);
})

app.get("/bmi-form.html", function(req, res){
    res.setHeader("content-type", "text/html");
    res.send(bmiFormFile);
})

app.get("/bmi-result.html", function(req,res){

    // why req.query.bmi ?? why bmi ?? bmi is parameter from route calculate below
    // also bmi is parameter with value of a in calculate route
    // so, that means bmi = a, while a = divide
    const nilai = req.query.bmi
    const pathResult = path.join(__dirname, "./pages", "./bmi-result.html")
    let readPath = fs.readFileSync(pathResult, "utf-8")

    // why if(nilai) ??
    // if(condition ? true : false), that means is it true or false
    // how js read it false or true, if the variable nilai has a valeu, that means it is true
    // if the nilai is empty variable, then the condition if false
    // in this case, the variable nilai has a value of a which is divide in calculate route
    // so varibale nilai isnt empty, it has a value, so it is true

    if(nilai){

        // what replace() do ?? 
        // if the condition is true, then it replace the placeholder in html of result to nilai
        // nilai is set to be replace in html body if the condition is true
        readPath = readPath.replace("[[bmi]]", nilai)
    } else {

        // if the confition is false, then  the placeholde rin html will be repoace with not found
        readPath = readPath.replace("[[bmi]]", "not found ")
    }

    // console.log(nilai)
    res.setHeader("content-type", "text/html")
    res.send(readPath)
})

app.post("/calculate", function(req,res){
    const data = req.body;
    const divide = data.weight/ data.height

    // ini value untuk pass ke result.html
    const a = divide
    console.log(a)
    // console.log(data);
    // console.log(divide)

    // what is "?bmi=" for ?? it is for parameter
    // and as a value for parameter bmi
    // so in above result.html we need to request to para, the parameter will carry value of a
    res.redirect("/bmi-result.html" + "?bmi=" + a);
})

app.listen(1001)