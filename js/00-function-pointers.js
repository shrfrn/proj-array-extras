'use strict'
document.querySelector('h3').innerText = 'Function Pointers'

// :1 Function Pointers

function foo() {
    console.log('foo')
}

function newFoo(name) {
    console.log('new foo with param: ' + name);
}

// foo()

// // goo points to foo

// var goo = foo
// goo()

// // foo points to a new function now. 
// // goo still points to the old one

// foo = newFoo
// foo('Puki')
// newFoo('Muki')
// goo()

// // foo points to an anonymous function now. 
// // goo still points to the original function

// foo = function (name) { console.log('Anonymous function with param ' + name) }
// foo('Puki')
// goo()

// // original function is lost

// goo = console.log
// goo('goo calls console.log')
// goo('goo calls console.log with another param', 8)
// foo()

// :2 Passing functions to other functions...

// setTimeout(foo, 1000)

function runThisFunc(func) {
    var myName = 'Sharon'
    var yourName = 'Roni'

    const res = func(myName, yourName)
    console.log('res: ', res)
}

// runThisFunc(foo)
// runThisFunc(newFoo)

// :3 Passing anonymous functions to other functions

// setTimeout(function () { console.log('Hi') }, 1000)
// runThisFunc(function (name) { console.log('Hi there', name)})

function forEach(arr, func) {
    for(var i = 0; i < arr.length; i++){
        func(arr[i])
    }
}

var nums = [13, 17, 10, 54]
// var names = ['Robi', 'Mulli', 'Nori']

// forEach(nums, function(item) { console.log('Hi', item) })
// forEach(nums, (item) => { console.log('Hi', item) })
// forEach(nums, (item, idx, items) => { console.log('Hi', item, idx, items) })

// :4 Arrow function syntax

// One line function - no need for {curlies} and return

// runThisFunc(function() { console.log('Hi') })
// runThisFunc(function() { return confirm('Are you sure') })

// One parameter - no need for (parenthesis)

// runThisFunc(function(name) { console.log('Hi', name) })
// runThisFunc(function(name1, name2) { console.log('Hi', name1, 'Dash from', name2) })
// runThisFunc(function(name1, name2) { confirm(`Hi ${name1}, do you know ${name2}?`) })

// runThisFunc((name1, name2) => confirm(`Hi ${name1}, do you know ${name2}?`))
//     var msg = `Hi ${name1}, do you know ${name2}?`
//     return confirm(msg) 
// })

// forEach(nums, function(item) { console.log('Hi', item) })

// Let's inrement each number in nums by 1 -  This doesn't work... why?

// forEach(nums, (num, idx, arr) => num += 1)
// console.log('nums: ', nums)

// This works! Why?

// forEach(nums, (item, idx, arr) => arr[idx] += 1)
// console.log('nums: ', nums)



// Part 2 - Returning functions from functions

// Activating a function which was returned from another function
// var func = getFunc()
// console.log('func', func)

// func('Baba')

// insideGetFunc()
// // Passing a function returned from a function
// setInterval(getFunc(), 1000)

// console.log('x', x)

function getFunc() {
    var x = {}
    // return 'hi'
    // return a function
    // return console.log

    // conditionally return a function
    // var num = getRandomInt(1, 2)
    // if (num === 1) return 'hi'
    // else return alert

    // // return an anonymous function
    // return function () { console.log('Hi anonymous') }

    // // return an arrow function
    // return  () => { console.log('Hi arrow') }

    // // // conditionally return an arrow function
    // var num = getRandomInt(1, 2)
    // if(num === 1) return  () => { console.log('Hi arrow') }
    // else          return  () => { alert('Hi arrow') }

    // // return a function which is defined inside another function
    function insideGetFunc() {
        console.log('I am defined inside insideGetFunc')
    }
    return insideGetFunc

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
