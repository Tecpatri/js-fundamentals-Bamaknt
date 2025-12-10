// TODO: Create an arrow function called 'square' that takes a single parameter
// and returns its square. Use the short syntax (no parentheses, implicit return)

import { sum } from "../02-code-structure/code-structure"

// Example: square(5) should return 25
export const square = (x) => x**2

// TODO: Create an arrow function called 'greet' that takes a name parameter
// and returns "Hello, [name]!" using a template literal
// Use the short syntax with implicit return
// Example: greet('Alice') should return 'Hello, Alice!'
export const greet = (name) => `Hello, ${name}!`

// TODO: Create an arrow function called 'add' that takes two parameters
// and returns their sum. Multiple parameters require parentheses
// Example: add(3, 7) should return 10
export const add = (x, y) => x + y

// TODO: Create an arrow function called 'getMax' that takes two parameters
// and returns the larger one. Use a multi-line arrow function with curly braces
// and an explicit return statement (with an if/else or ternary operator)
// Example: getMax(5, 10) should return 10
export const getMax = (x, y) => {
    if (x > y) {
        return x
    }else if (x < y) {
        return y
    }else {
        return "checkout input"
    }
}
getMax(2, 5)

// TODO: Create an arrow function called 'createMultiplier' that takes a factor
// and returns another arrow function. The returned function should take a number
// and return it multiplied by the factor
// This demonstrates arrow functions returning arrow functions
// Example: const double = createMultiplier(2);
//          double(5) should return 10
export const createMultiplier = (factor) => (number) => factor * number
const double = createMultiplier(2) 
const triple = createMultiplier(3)

console.log(triple(5)) 

// TODO: Create an arrow function called 'filterPositive' that takes an array
// of numbers and returns a new array with only the positive numbers
// Use the array's filter method with an arrow function as the callback
// Example: filterPositive([1, -2, 3, -4, 5]) should return [1, 3, 5]
export const filterNegative = (arr, callback) => {
    return numbers.filter(callback)
}
const negativeNum = (num) => num < 0
console.log(filterNegative([6, -7, -8, 9 -4], negativeNum))

/*
const filterPositive = numbers => nunbers.filter(numbers => numbers > 0) 
const numbers = [1, -2, -3, 4, -5]
console.log(filterPositive(numbers))  
*/

