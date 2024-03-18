const crypto1 = require("crypto")

// randomInt()
const ranNum = crypto1.randomInt(100)
console.log(ranNum)

// randomBytes()
const ranBytes = crypto1.randomBytes(10).toString('hex')
const ranBytes2 = crypto1.randomBytes(10).toString('base64')
const ranBytes3 = crypto1.randomBytes(10).toString('utf-8')
const ranBytes4 = crypto1.randomBytes(10).toString("utf-16le")

console.log(ranBytes)
console.log(ranBytes2)
console.log(ranBytes3)
console.log(ranBytes4)

// randomUUID
const ranUUID = crypto1.randomUUID()
console.log(ranUUID)

// encrypt and decrypt on crypto