'use strict'
document.querySelector('h3').innerText = 'Array.reduce()'

const vals = [4, 7, 1]
function accumulateSum(acc, num) {
    return acc + num
}
// var r = mySimpleReduce(vals, accumulateSum, 0)
// console.log('Got: ', r)
// 

function mySimpleReduce(items, func, accInitialVal) {
    var acc = accInitialVal
    for (var i = 0; i < items.length; i++) {
        var item = items[i]
        acc = func(acc, item)
    }
    return acc
}

// If time permits - here is a more full implementation
// it supports getting no accInitialValue
function myFullReduce(items, func, accInitialVal) {
    var acc
    var startIdx = 0
    if (accInitialVal !== undefined){
        acc = accInitialVal
    } else {
        acc = items[0]
        startIdx = 1
    }

    for (var i = startIdx; i < items.length; i++) {
        var item = items[i]
        acc = func(acc, item)
    }
    return acc
}