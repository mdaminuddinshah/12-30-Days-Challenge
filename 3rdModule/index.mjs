// import random-word module in here
// but first change file extension to .mjs
// how to import is to use esm 
// ESM = Ecmascript module
// const variable = require("module") -> this is common js
import {generate, count} from "random-words";
console.log(generate())

// create 5 in array
console.log(generate(3))

// exactly = 2 words
// maxLength = max alphabet
// minLength = min alphabet
console.log(generate({exactly: 2, minLength: 2, maxLength: 3}))

// min = 2 words in array
// max = 4 words in array
console.log(generate({min: 2, max: 4}))

// join = add all string
console.log(generate({exactly: 2, join: ""}))

// wordsPerString = total words for 1 string
// separator = separate 2 words in 1 string
console.log(generate({exactly: 2, separator: "-", wordsPerString: 2}))

console.log(generate({exactly: 2, wordsPerString: 2, formatter: (w, i)=>{
    return i === 0
    ? w.slice(0,1).toUpperCase().concat(w.slice(1)) : w
}}))

console.log(generate({
    exactly: 2,
    minLength: 2,
    maxLength: 2,
    wordsPerString:2,
    formatter: (perkataan, index) => {
        if(index === 0){
            return perkataan.slice(0, 1).toUpperCase().concat(perkataan.slice(1))
        }else {
            return perkataan
        }
    }
    
}))

// total of words available
console.log(count());

// total of words with length 5 alphabet
console.log(count({minLength: 5}))