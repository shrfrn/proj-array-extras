'use strict'

// :1 Filter & sort

const players = [
    { name: 'Alice', age: 17, score: 120 },
    { name: 'Bob', age: 22, score: 95 },
    { name: 'Charlie', age: 28, score: 150 },
    { name: 'David', age: 16, score: 80 },
    { name: 'Eva', age: 23, score: 110 },
    { name: 'Frank', age: 14, score: 135 },
    { name: 'Grace', age: 29, score: 100 },
    { name: 'Henry', age: 24, score: 90 }
]

// Filter players age 18 and above, and sort them by name

// Filter players age 18 and above, with scores below 100 
// and sort them by score

// Filter players with the letter e in their names 
// and return an array of their names

// Filter players with 3 letters in their names 
// and return the sum of their scores

// :2 Array.flat()

const arr = [[9, 7, 9], 10, [8, 8, 8, 8], [3, 4, 2]]

// Flatten an array of arrays, filter out duplicates, 
// and sort the elements in ascending order.

const sortedUniqueVals = arr.flat().reduce((acc, item) => {
    if(!acc.includes(item)) acc.push(item)
    return acc
}, []).sort((n1, n2) => n1 - n2)

console.log('sortedUniqueVals: ', sortedUniqueVals)

// :3 Array.findLast()

// Find the last player with a score above 100