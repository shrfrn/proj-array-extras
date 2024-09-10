'use strict'

function handleName(n, idx, names) {
	console.log('Handling: ', n, idx, names)
}

init()

function init() {
	var names = ['Kai', 'Pai', 'Mai']

	// :1 Array iteration using a for loop

	for (var i = 0; i < names.length; i++) {
		var currName = names[i]
        handleName(currName, i, names)
	}

	// :2 Array iteration using Array.forEach() with a global function
    
	// :3 Array iteration using Array.forEach() with an anonymous function
        
    // :4 Array iteration using Array.forEach() with an arrow function
}

{
    document.querySelector('h3').innerText = 'Array.forEach()'
}