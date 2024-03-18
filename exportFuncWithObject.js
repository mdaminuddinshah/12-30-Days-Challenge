const array1 = [
    "👻","☠️","🤖","🤠","💀","👽","👾","🤖",
    "⚽","⚾","🏀","🥎","🎳","🎮","🎃","🎃"
]

function arrayLoop(){
    for(let i = 0; i < array1.length; i++){
        const results = `the index of ${i} is ${array1[i]}`
        console.log(results)
    }
}

// simpan function arrayLoop dalam array
const arrLop = {
    arrayLoop
}

module.exports = arrLop