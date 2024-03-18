// export using array, we need to call the same array name from exportFuncWithArray.js
// e.g. arrLop is array exported from exportFuncWithArray.js
const arrLop = require("./exportFuncWithObject")
const Lop = arrLop.arrayLoop
Lop()

// cals.js
const cals = require("./math")
const plus = cals.add(5,5)
console.log(plus)