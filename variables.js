/* 
    var -> function scope
    let -> block scope (loop)
    const -> constant
*/

var a = 'hello'
let b = "world"
c = 'welcome'
d = 1234
const e = 0.5678
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
lambda1('ok 1')

lambda2 = (x) => {console.log('from anonymous function: ' + x)}
lambda2('ok 1')


// file operation
const fs = require('fs')
fs.writeFile('test.txt', 'hello world', {encoding:'utf8',flag:'w'}, (err)=>{})
fs.readFile('test.txt', {encoding:'utf8',flag:'r'}, function(err,buf){console.log(buf)})
fs.close()


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

x = 123
if (x) throw console.error('caught error')


