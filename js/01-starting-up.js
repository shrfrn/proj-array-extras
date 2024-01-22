'use strict'

function handleName(n, idx) {
	console.log('Now Handling: ', n, idx)
}

init()

function init() {
	var names = ['Shai', 'Pai', 'Mai']

	// :1 Array iteration using a for loop

	console.log('Using a for loop:')
	for (var i = 0; i < names.length; i++) {
		var currName = names[i]
		console.log('Handling: ', currName, i)
	}

	// :2 Array iteration using Array.forEach() with a global function
    
	// :3 Array iteration using Array.forEach() with an anonymous function
        
    // :4 Array iteration using Array.forEach() with an arrow function
}

{
    document.querySelector('h3').innerText = 'Array.forEach()'
}