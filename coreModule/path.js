const path = require("path")
const fs = require("fs")

const extType = path.join("../localModule", "index.js")
console.log(extType)

const TypeFile = path.extname(extType)
console.log(TypeFile)

if(extType == ".txt"){
    console.log("this is txt file")
} else{
    console.log(`This is not .txt file, it is ${TypeFile} file`)
}

// global
console.log(__dirname)
console.log(__filename)

// 
const path2 = path.join(__dirname,"../testFolder", "textFile_0.txt")
console.log(path2)

fs.readFile(path2, "utf8", function(err, data){
    if(err){
        console.log(" cannot find file ",err)
    } else{
        console.log(data)
    }
})
