'use strict'

// Array.reduce() reduces the array to single value

var nums = [3, 8, 1, 2]

// :1 Summing an array with Array.reduce()

var sum = nums.reduce((accumulator, num) => {
    console.log('Num is', num, 'Acc is', accumulator)
    return accumulator + num
}, 0)

console.log('sum is:', sum)

// Here, we use a shorter syntax

// const sum = nums.reduce((acc, num) => acc + num)
// console.log('sum is:', sum)

// :2 Finding the smallest number in an array with Array.reduce()

// When not passing an initial value for the accumulator, 
// it is initialized with the first item in the array 
// and array iteration starts with the second item

const min = nums.reduce((acc, num) => (acc < num) ? acc : num)
console.log('Min:', min)

{
    document.querySelector('h3').innerText = 'Array.reduce()'
}