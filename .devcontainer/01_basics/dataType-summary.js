// Primitive (call by value)

// 7 types : String, Number, Boolean, null, Undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3 //  number

const isLoggedIn = false // boolean
const outsideTemp = null // object
let userEmail; // undefined
const myName = "Udbhav" //String

const id = Symbol('123') // symbol
const anotherId = Symbol('123')

console.log( id === anotherId)

const bigNumber = 23268454451654451n //bigint


// Reference(Non Primitive) 

// Array, Object, Functions
// dataType (Array , object) => function & Function => Object Function

const heros = ["spiderman", "batman", "ironman"]  // object

let myObj = {
    name : "udbhav",
    age: 22,
} // object

const myFunction = function(){
    console.log("Hello World");

} // function

console.log(typeof myName);


// ++++++++++++++++++++++++++ Memory ++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)


