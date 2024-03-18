// export using array, we need to call the same array name from exportFuncWithArray.js
// e.g. arrLop is array exported from exportFuncWithArray.js
const Lop = require("./exportFuncWithObject")
const Lops = Lop.arrayLoop
Lops()

// cals.js
const cals = require("./math")
const plus = cals.add(5,5)
console.log(plus)

// string.js
const str = require("./string")
const nama = str.names
nama()

// strArray.js [0]
const Arr = require("./strArray")
const nama2 = Arr[0]
nama2()

// strArray.js [1]
const strArr2 = require("./strArray")
const nama3 = strArr2[1]
nama3()