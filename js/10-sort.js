'use strict'

// function compareFunc(a, b) {
//     if (a is less than b by some ordering criterion) {
//       return -1
//     } else if (a is greater than b by the ordering criterion) {
//       return 1
//     }
//     // a must be equal to b
//     return 0
//   }

// If compareFunc is not supplied, all non-undefined array elements 
// are sorted by converting them to strings and comparing strings. 

// - For example, "banana" comes before "cherry". 

// - In a numeric sort, 9 comes before 80, 
//   but because numbers are converted to strings, "80" comes before "9". 

// :1 - Default sorting without comareFunc - lexicographic comparison

const strings = ['March', 'Jan', 'Feb', 'Dec']
console.log(strings)

// strings.sort()
// console.log(strings)

// :2 - Default sorting without comareFunc - array items are converted to strings

// const nums = [1, 30, 4, 21, 100000]
// console.log(nums)

// nums.sort()
// console.log(nums)

// :3 - Using a compareFunc to sort numbers

function compareNums(a, b) {
    if(a > b) return a
    else if(b > a) return b
    
    return 0
}

// nums.sort()
// console.log(compareNums)

// :4 - Using a arrow compareFunc - much simpler

// nums.sort((a, b) => a - b)
// console.log(nums)

// :5 - Sorting more complex array items (Objects)

var students = [
    { name: 'Buli', age: 19, grades: { math: 56, history: 28 }},
    { name: 'Kuli', age: 16, grades: { math: 6, history: 21 }},
    { name: 'Muli', age: 15, grades: { math: 93, history: 70 }},
    { name: 'Kuti', age: 10, grades: { math: 61, history: 7 }}
]
console.log(students)

// This will not work...
// Array items are converted to strings ([object Object])
// so they are all "equal"

// students.sort() 
// console.log(students)

// We must supply a comareFunc for meaningful results

// students.sort((s1, s2) => s1.age - s2.age)
// console.log(students)

// students.sort((s1, s2) => s1.grades.history - s2.grades.history)
// console.log(students)

{
    document.querySelector('h3').innerText = 'Array.sort()'
}