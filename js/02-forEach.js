'use strict'

function print(item, idx) {
    console.log(idx, ':', item)
}

var players = [
    { name: 'p1', score: 19 },
    { name: 'p2', score: 12 },
    { name: 'p3', score: 53 },
]

// :1 Print all players using a for loop + a global function

// :2 Print all players using Array.forEach() + a global function

// :3 Print all players using Array.forEach() + an anonymous function

// :4 Increment all player scores by one using a for loop

// for (var i = 0; i < players.length; i++) {
//     var player = players[i]
//     player.score++
// }

// :5 Increment all player scores by one using Array.forEach()

// :6 Let's implement forEach

{
    document.querySelector('h3').innerText = 'Array.forEach()'
}