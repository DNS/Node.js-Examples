﻿/* 
    var: function scope
    let: block scope (loop)
    const: constant
	without declaration: global variable
*/

// variable declaration
var a = 'hello'
let b = "world"
c = 'welcome'
d = 1234
const e = 0.5678

// array, list
var arr1 = [1,2,3,4]
var arr2 = ['welcome','to','indonesia']

// array slice/subset
arr1.slice(0,2)

// flatten array
[1,2,[3,4]].flat()

// flatten all depth
[1,2,[3,4,[5,6]]].flat(Infinity)

// concatenate array
[1,2].concat(3)
[1,2].concat([4,5])


// ... "spread operator" or "rest parameter"
a = [1,2]
b = [3,4]
c = [a,b,5,6]			// [ [ 1, 2 ], [ 3, 4 ], 5, 6 ]
c = [...a,...b,5,6]		// [ 1, 2, 3, 4, 5, 6 ]


// convert iterator to array
iterator = [1, 2, 3, 4, 5][Symbol.iterator]()
array1 = iterator.toArray()
array2 = [...iterator]
console.log(array2)		// Output: [1, 2, 3, 4, 5]




// hash, dictionary, key-value, JSON object
x = {'a':'b','c':'d'}
y = {'a':[7,8,9]}
console.log(x.a)
console.log(y.a[2])


// ; statement separator
console.log('statement'); console.log('separator');

// string concatenation
console.log(a+b+c+d+e)

// string format & interpolation
console.log(`hello ${a} ${d+e}`)
console.log(`precision ${e.toFixed(2)}`)




////////////////////////

// loop
var arr = [1,2,3,4]

// for
for (i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

// for ... of ...
for (i of arr) { console.log(i) }

// forEach
arr.forEach( function(i) { console.log(i) } )
arr.forEach( () => { console.log(i) } )


console.log(arr)

// while
var i = 0
while (i < arr.length) {
    console.log(i + ': ' + arr[i]);
    i++;
}




////////////////////////

// stdout
console.log('standard output message')

// stderr
console.error('error message')

// stdwarn
console.warn('warning message')



// function
function TestFunction (x) {
    console.log('from test function: ' + x)
}

TestFunction(1234)

// lambda
lambda1 = function (x) {console.log('from anonymous function: ' + x)}
lambda1('from lambda 1')

lambda2 = (x) => {console.log('from anonymous function: ' + x)}
lambda2('from lambda 2')


// file operation
const fs = require('fs')
// fs.open() generaly not needed to write & read file
// fs.open('test.txt', 'r', (err, fd) => { fs.close(fd) } )

fs.writeFile('test.txt', 'hello world', {encoding:'utf8'}, (err)=>{})
fs.appendFile('test.txt', ' append!!!', {encoding:'utf8'}, (err)=>{})
fs.readFile('test.txt', {encoding:'utf8',flag:'r'}, function(err,buf){console.log(buf)})
//fs.close()


fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

// exception
try {
    console.log('try something')
} catch (err) {
    console.error('handle error')
}

// try reading file
if (err) throw console.error('caught error')

