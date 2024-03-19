const fs = require("fs")

for(let i = 0; i < 5; i++){
    fs.writeFile(`../testFolder/textFile_${i}.txt`, `Index file_${i}`, function(err){
        if(err){
            console.log('file error')
        } else {
            console.log(`file created_${i}`)
        }
    })
}
