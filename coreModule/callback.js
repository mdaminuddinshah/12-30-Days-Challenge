// create file with type nul > filename
// type nul > fileName

// callback

function add(a,b){
    const results = a * b
    console.log(results)
}

function callingCallback(a,b,callbacks){
    callbacks(a,b)
}

callingCallback(2,6, add)

callingCallback(56,100, function(a,b){
    const results = a - b
    console.log(results)
})

callingCallback(2134, 3432,function(a,b){
    const results = a / b
    console.log(results)
})

callingCallback(13334, 13412, (a,b) => {
    const results = a + b
    console.log(results)
})

// callback only callback as parameter
function cals(calbacks1){
    calbacks1()
}

cals(function(){
    const results = 12 * 5
    console.log(results)
})

