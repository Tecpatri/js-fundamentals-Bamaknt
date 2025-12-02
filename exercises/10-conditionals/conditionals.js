/**
 * Exercise 10 - Conditional Branching: if, '?'
 *
 * Implement the following functions using if/else statements and the ternary operator.
 */

/**
 * Converts a numeric score to a letter grade
 * 90-100: A
 * 80-89: B
 * 70-79: C
 * 60-69: D
 * Below 60: F
 *
 * @param {number} score - The numeric score (0-100)
 * @returns {string} The letter grade
 *
 * Example: getGrade(95) -> 'A'
 * Example: getGrade(72) -> 'C'
 */
export function getGrade (score) {
  // TODO: Use if/else if/else to return the appropriate letter grade
  if (score >= 90 && score <= 100) {
    return 'A'
  } else if (score >= 80 && score < 90) {
    return 'B'
  } else if (score >= 70 && score < 80) {
    return 'C'
  } else if (score >= 60 && score < 70) {
    return 'D'
  } else {
    return 'F'
  }
}
getGrade(85)

/**
 * Returns the absolute value of a number
 * (The absolute value is always positive)
 *
 * @param {number} num - The number
 * @returns {number} The absolute value
 *
 * Example: getAbsoluteValue(-5) -> 5
 * Example: getAbsoluteValue(3) -> 3
 */
export function getAbsoluteValue (num) {
  // TODO: Use an if/else statement
  // If num is negative, return -num
  // Otherwise, return num
  if (num < 0) {
    return -num
  } else {
    return num
  }
}
getAbsoluteValue(-10)

/**
 * Checks if a person can vote based on age
 * @param {number} age - The person's age
 * @returns {boolean} True if age >= 18, false otherwise
 *
 * Example: canVote(20) -> true
 * Example: canVote(16) -> false
 */
export function canVote (age) {
  // TODO: Use an if/else statement to return true or false
  if (age >= 18) {
    return true
  } else {
    return false
  }
}
canVote(16)

/**
 * Returns the larger of two numbers using the ternary operator
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The larger number
 *
 * Example: getMax(10, 5) -> 10
 * Example: getMax(3, 8) -> 8
 */
export function getMax (a, b) {
  // TODO: Use the ternary operator (? :)
  // Format: condition ? valueIfTrue : valueIfFalse
  return (a > b) ? a : b
}
getMax(7, 12)

/**
 * Classic FizzBuzz problem
 * Returns:
 * - 'FizzBuzz' if the number is divisible by both 3 and 5
 * - 'Fizz' if the number is divisible by 3
 * - 'Buzz' if the number is divisible by 5
 * - The number itself (as a string) otherwise
 *
 * @param {number} num - The number to check
 * @returns {string} The FizzBuzz result
 *
 * Example: getFizzBuzz(15) -> 'FizzBuzz'
 * Example: getFizzBuzz(9) -> 'Fizz'
 * Example: getFizzBuzz(10) -> 'Buzz'
 * Example: getFizzBuzz(7) -> '7'
 */
export function getFizzBuzz (num) {
  // TODO: Use if/else if/else statements
  // IMPORTANT: Check for divisibility by both 3 AND 5 first!
  // Hint: Use the % (modulo) operator to check divisibility
  // A number is divisible by 3 if num % 3 === 0
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz'
  } else if (num % 3 === 0) {
    return 'Fizz'
  } else if (num % 5 === 0) {
    return 'Buzz'
  } else {
    return num.toString()
  }
}
getFizzBuzz(30)

/**
 * Checks the sign of a number
 * Returns:
 * - 'positive' if num > 0
 * - 'negative' if num < 0
 * - 'zero' if num === 0
 *
 * @param {number} num - The number to check
 * @returns {string} The sign description
 *
 * Example: checkSign(5) -> 'positive'
 * Example: checkSign(-3) -> 'negative'
 * Example: checkSign(0) -> 'zero'
 */
export function checkSign (num) {
  // TODO: Use if/else if/else to check the sign
  if (num > 0) {
    return 'positive'
  } else if (num < 0) {
    return 'negative'
  } else {
    return 'zero'
  }
}
checkSign(-7)

/**
 * Checks if a value is truthy or falsy
 * @param {*} value - Any value
 * @returns {string} 'truthy' or 'falsy'
 *
 * Example: checkTruthiness('hello') -> 'truthy'
 * Example: checkTruthiness(0) -> 'falsy'
 * Example: checkTruthiness('') -> 'falsy'
 */
export function checkTruthiness (value) {
  // TODO: Use an if/else statement
  // If value is truthy, return 'truthy', else return 'falsy'
  if (value) {
    return 'truthy'
  } else {
    return 'falsy'
  }
}
checkTruthiness('world')

/**
 * Returns a discount message based on purchase amount
 * $100 or more: '20% discount'
 * $50-$99: '10% discount'
 * Less than $50: 'No discount'
 *
 * @param {number} amount - Purchase amount
 * @returns {string} Discount message
 *
 * Example: getDiscountMessage(120) -> '20% discount'
 * Example: getDiscountMessage(75) -> '10% discount'
 * Example: getDiscountMessage(30) -> 'No discount'
 */
export function getDiscountMessage (amount) {
  // TODO: Use if/else if/else statements
  if (amount >= 100) {
    return '20% discount'
  } else if (amount >= 50 && amount < 100) {
    return '10% discount'
  } else {
    return 'No discount'
  }
}
getDiscountMessage(45)
