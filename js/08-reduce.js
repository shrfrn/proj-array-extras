'use strict'

// :1 Convert an array of words to a word frequency map

// mapUsingReduce()

const str = 'Puki Ben David and Muki Ben David'
const wordCountMap = str.split(' ').reduce((acc, word) => {
    if(!acc[word]) acc[word] = 0
    acc[word]++
    return acc
}, {})

// :2 Convert an array of students to an object

const students = [
    { id: 's101', name: 'Shimshon', avg: 90 },
    { id: 's102', name: 'Dori', avg: 60 },
    { id: 's103', name: 'Boris', avg: 70 },
    { id: 's104', name: 'Lenny', avg: 30 },
]

// const map = {
//     s101: { id: 's101', name: 'Shimshon', avg: 90 },
//     s102: { id: 's102', name: 'Dori', avg: 60 },
//     s103: { id: 's103', name: 'Boris', avg: 70 },
//     s104: { id: 's104', name: 'Lenny', avg: 30 },
// }

// const studentMap = keyBy(students, 'id')
// const studentMap = keyBy(students, 'name')
// console.log(studentMap)

const studentMap = keyBy(students, 'id')
console.log(studentMap)

function keyBy(students, key) {
    return students.reduce((acc, student) => {
        acc[student[key]] = student
        return acc
    }, {})
}

// :3 Implement Array.map() using reduce

var nums = [2, 8, 9]

// const res = nums.map(num => num ** 2)
// const res = mapUsingReduce(nums)

// console.log('res: ', res)

function mapUsingReduce(nums) {
    return nums.reduce((acc, num) => {
        acc.push(num ** 2)
        return acc
    }, [])
}

// const res = mapUsingReduce(nums, num => num ** 2)

// function mapUsingReduce(nums, func) {
//     return nums.reduce((acc, num) => {
//         acc.push(func(num))
//         return acc
//     }, [])
// }

{
    document.querySelector('h3').innerText = 'Array.reduce()'
}