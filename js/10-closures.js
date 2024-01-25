'use strict'

// :1 Closure with setTimeout()

function closureDemo() {
	var notHereSoon = 9
	var count = 10
    
	setTimeout(() => {
        console.log('count: ', count)
		count = 100
	}, 500)

	setTimeout(() => {
        console.log('Count is: ', count)
	}, 1000)
}

// :2 Another example with setTimeout()

function momentaryHide(ms) {
	var el = document.querySelector('h1')
	el.hidden = true

	setTimeout(() => el.hidden = false, ms)
}

// :3 Private variable (can't be accessed directly)

var privateVar = createPrivateVar() 

function createPrivateVar() {

    var val

     return {
        set: function(newVal) { val = newVal },
        get: function() { return val },
        type: function() { return typeof val }
     }

     return {
        set: newVal => val = newVal,
        get: () => val,
        type: () => typeof val
     }

    return {
        set(newVal) { val = newVal },
        get() { return val },
        type() { return typeof val }
     }
}

// :4 Classic closure pitfall

// closurePitfall()

function closurePitfall() {
    const elBtns = document.querySelectorAll('button')

    for (var i = 0; i < elBtns.length; i++) {
      console.log('i', i)
      elBtns[i].onclick = () => console.log('Clicked!, i:', i)
    }
}

{
    document.querySelector('.closure-btns').classList.remove('hidden')
    document.querySelector('h3').innerText = 'Closures'
}