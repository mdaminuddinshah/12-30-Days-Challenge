const fs = require("fs")
const crypto = require("crypto")

const ranNum = crypto.randomInt(999)

// read fs,js
fs.readFile("../testFolder/textFile_0.txt", "utf8" ,function(err, data){
    if(err){
        console.log(err)
    } else {
        console.log(`successfully read file`,data)
    }
})

// 
fs.mkdir(`../NewFolder${ranNum}`, {recursive: true} ,function(err){
    if(err){
        console.log(err)
    } else {
        console.log(`folder created ${ranNum}`)
    }
})

fs.writeFile(`../NewFolder${ranNum}/textFile_${ranNum}`, `Data ${ranNum}`, function(err){
    if(err){
        console.log(err)
    } else {
        console.log("file created")
    }
})

fs.readFile(`../NewFolder${ranNum}/textFile_${ranNum}`,"utf8" ,function(err, data){
    if(err){
        console.log(err)
    } else {
        console.log(`The file ${ranNum}`, data)
    }
})

