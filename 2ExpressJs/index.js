// import expressJs
const express = require("express")
const app = express()

// import path module from nodejs/core module
const path = require("path")
const indexPage = path.join(__dirname, "./pages", "./index.html")

// import fs module from nodejs/core module
const fs = require("fs")
const readIndexPage = fs.readFileSync(indexPage, "utf-8")

app.use(express.static("./public"))
app.use(express.urlencoded({extended: true}))


app.get("/", (req,res) => {
    res.setHeader("content-type", "text/html")
    res.send(readIndexPage)
})

app.post("/result", function(req, res) {
    const body = req.body
    const firstname = body.firstname
    const lastname = body.lastname
    const email = body.email
    const phonenumber = body.phonenumber
    const resultPage = path.join(__dirname, "./pages", "./result.html")
    let readResultPage = fs.readFileSync(resultPage, "utf-8")


    if(firstname || lastname || email || phonenumber){
        readResultPage = readResultPage.replace("[[firstname]]", firstname)
        readResultPage = readResultPage.replace("[[lastname]]", lastname)
        readResultPage = readResultPage.replace("[[email]]", email)
        readResultPage = readResultPage.replace("[[phonenumber]]", phonenumber)
    }

    res.setHeader("content-type", "text/html")
    res.send(readResultPage)
})

app.listen(1001)