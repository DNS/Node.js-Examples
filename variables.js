
/* 
    variable declaration scope
    var -> function scope
    let -> block scope (loop)
*/

var a = 'hello'
let b = "world"
c = 'welcome'
d = 1234
e = 0.5678
var arr1 = [1,2,3,4]
var arr2 = ['welcome','to','indonesia']

console.log(a+b+c+d+e) 

// ; statement separator
console.log('statement'); console.log('separator');

////////////////////////

// loop
var arr = [1,2,3,4]

// for
for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

// forEach
arr.forEach( function(i){console.log(i)} )

console.log(arr)

// while
var i = 0
while (i < arr.length) {
    console.log(i + ': ' + arr[i]);
    i++;
}


// string format & interpolation
var s1 = 'world'
var s2 = 0.123456789
var s3 = 888
console.log(`hello ${s1} ${s2+s3}`)
console.log(`precision ${s2.toFixed(2)}`)

////////////////////////

// stdout
console.log('standard output message')

// stderr
console.err('error message')

// stdwarn
console.warn('warning message')



// function
function TestFunction (x) {
    console.log('from test function: ' + x)
}

TestFunction(1234)

// lambda
lambda = function (x) {console.log('from anonymous function: ' + x)}
lambda(1234)
