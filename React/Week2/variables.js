var aNumber = 10
var aString = "This is a string " + aNumber
// console.log("astring = " + aString)

const x = 100
console.log("x=",x)

const name = "Jane Doe"
// console.log("name=" + name)

// const x = 200 //illegal
//let name = "John" illegal

let notAssigned;
// console.log(notAssigned)

const PI = 3.1415
// console.log("PI=",PI)

console.log('name is of type ${typeof name}')
console.log('PI is of type ${typeof PI}')

// console.log(Math.PI)

let y = 200.0
y = y + 10
console.log("y=" + y)

let person = "John"
person = person + "Doe"
//console.log(person)

let radius = 10.0
let area = radius * radius * Math.PI
let circum = 2 * Math.PI * radius
console.log("radius = ${radius} ,area = ${'area'}, circumference={circum}")


const rate = 0.05;
let principal = 1000;
let term = 5
let amoount = principal * Math.pow((1 + rate),term)
console.log(' ${principal} invested at ${rate+100}% after ${term} years is ${amount}')