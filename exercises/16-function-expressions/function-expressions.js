// TODO: Create a function expression called 'multiply' that takes two parameters
// and returns their product
// Example: multiply(3, 4) should return 12
export const multiply = function (a, b) {
  return a * b
}
multiply(3, 4)

// TODO: Create a function expression called 'sayHi' that takes a name parameter
// and returns "Hi, [name]!"
// Example: sayHi('Alice') should return 'Hi, Alice!'
export const sayHi = function (name) {
  return `Hi, ${name}!`
}
sayHi('Alice')

// TODO: Create a function expression called 'createGreeting' that takes a greeting word
// and returns a NEW FUNCTION. The returned function should take a name parameter
// and return "[greeting], [name]!"
// This demonstrates that functions can return other functions
// Example: const greetInSpanish = createGreeting('Hola');
//          greetInSpanish('Maria') should return 'Hola, Maria!'
export const createGreeting = function (greeting) {
  return function (name) {
    return `${greeting}, ${name}!`
  }
}
const greetInSpanish = createGreeting('Hola');
greetInSpanish('Maria')

// TODO: Create a function expression called 'ask' that takes four parameters:
// - question: a string with the question
// - yes: a callback function to call if answer is true
// - no: a callback function to call if answer is false
// - answer: a boolean value
// The function should return: "Question: [question] Answer: [result of callback]"
// Example: ask('Do you agree?', yes, no, true) where yes() returns 'You agreed.'
//          should return 'Question: Do you agree? Answer: You agreed.'
export const ask = function (question, yes, no, answer) {
  let question = 'Do you agree?'
  function (yes) {
    return 'You agreed.'
  }
}

// TODO: Create a function expression called 'calculator' that returns an object
// with four methods: add, subtract, multiply, and divide
// Each method should take two parameters and return the result
// Example: const calc = calculator();
//          calc.add(5, 3) should return 8
export const calculator = function () {
  return {add: function (a, b) {
    return a + b
  }, subtract: function (a, b) {
    return a - b
  }, multiply: function (a, b) {
    return a * b
  }, divide: function (a, b) {
    return a / b
  }
  }
}
calculator.add(3, 5)

// TODO: Create a function expression called 'processArray' that takes two parameters:
// - arr: an array of numbers
// - callback: a function to apply to each element
// The function should return a new array with the callback applied to each element
// Example: processArray([1, 2, 3], function(x) { return x * 2; })
//          should return [2, 4, 6]
export const processArray = function (arr, callback) {
  arr.forEach(callback)
    return x * 2
}
processArray([1, 2, 3], function (x) { return x * 2 })