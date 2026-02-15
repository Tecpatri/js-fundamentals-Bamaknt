/**
 * Counts down from n to 1 and returns an array of the numbers.
 * Use a while loop for this implementation.
 *
 * @param {number} n - The starting number
 * @returns {number[]} An array of numbers from n down to 1
 *
 * Example:
 *   countDown(5) => [5, 4, 3, 2, 1]
 *   countDown(3) => [3, 2, 1]
 *   countDown(0) => []
 */
export function countDown (n) {
  // TODO: Use a while loop to count from n down to 1
  // Create an array to store the numbers
  // While n is greater than 0, add n to the array and decrement n
  const numbers = []
  while (n > 0) {
    numbers.push(n)
    n--
  }
  return numbers
}
countDown(3)

/**
 * Sums all numbers in an array using a for loop.
 *
 * @param {number[]} numbers - An array of numbers
 * @returns {number} The sum of all numbers
 *
 * Example:
 *   sumNumbers([1, 2, 3, 4]) => 10
 *   sumNumbers([]) => 0
 *   sumNumbers([5]) => 5
 */
export function sumNumbers (numbers) {
  // TODO: Use a for loop to iterate through the array
  // Initialize a sum variable to 0
  // Add each number to the sum
  // Return the sum
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
  }
  return sum
}
sumNumbers([1, 2, 3])

/**
 * Finds the first negative number in an array.
 * Use a loop with the break statement to exit early when found.
 *
 * @param {number[]} numbers - An array of numbers
 * @returns {number|null} The first negative number, or null if none found
 *npm test
 * Example:
 *   findFirstNegative([1, 2, -3, -4, 5]) => -3
 *   findFirstNegative([1, 2, 3]) => null
 *   findFirstNegative([-1, -2]) => -1
 */
export function findFirstNegative (numbers) {
  // TODO: Use a for loop to iterate through the array
  // Check if each number is negative (< 0)
  // If negative, use break to exit the loop and return the number
  // If no negative number is found, return null
  for (let i = 0; i < numbers.length; i++) {
    if (numbers < 0) {
        break
        return numbers
    } else {
      return null
    }         
  }
}
console.log(findFirstNegative([1, 2, -4, -5]))

/**
 * Collects only odd numbers from 1 to n.
 * Use the continue statement to skip even numbers.
 *
 * @param {number} n - The upper limit (inclusive)
 * @returns {number[]} An array of odd numbers from 1 to n
 *
 * Example:
 *   skipEvens(10) => [1, 3, 5, 7, 9]
 *   skipEvens(5) => [1, 3, 5]
 *   skipEvens(1) => [1]
 */
export function skipEvens (n) {
  // TODO: Use a for loop from 1 to n
  // Check if the number is even (i % 2 === 0)
  // If even, use continue to skip to the next iteration
  // If odd, add to the result array
  const result = []
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      continue
    } else {
      result.push(i)
    }
  } return result
}
skipEvens(9)

/**
 * Simulates retrying an operation until it succeeds.
 * The validator function is called repeatedly until it returns true.
 * Use a do...while loop.
 *
 * @param {Function} validator - A function that returns true when valid
 * @returns {number} The number of attempts it took
 *
 * Example:
 *   let count = 0;
 *   repeatUntilValid(() => ++count === 3) => 3
 */
export function repeatUntilValid (validator) {
  // TODO: Use a do...while loop
  // Initialize an attempts counter to 0
  // In the do block, increment attempts and call validator()
  // Continue while validator returns false
  // Return the number of attempts
  let attempts = 0
  do {
    attempts++
    validator()
    continue
  } while (!validator())
  return attempts
}
repeatUntilValid(() => 3)

/**
 * Creates a multiplication table as a 2D array.
 * Use nested loops to generate the table.
 *
 * @param {number} size - The size of the table (size x size)
 * @returns {number[][]} A 2D array representing the multiplication table
 *
 * Example:
 *   createMultiplicationTable(3) => [
 *     [1, 2, 3],
 *     [2, 4, 6],
 *     [3, 6, 9]
 *   ]
 */
export function createMultiplicationTable (size) {
  // TODO: Use nested for loops
  // Outer loop: iterate from 1 to size (row)
  // Inner loop: iterate from 1 to size (column)
  // Each cell should be row * column
  // Return a 2D array
  const result = []
  for (let i = 1; i <= size; i++) {
    const child = []
    for (let j = 1; j <= size; j++) {
      // the goal is that each element of child should be the product of row * column
      child.push(i * j) 
    } 
    // let's say size = 3; by the end of the second loop child should look like this: [1*1, 1*2, 1*3]
    // so child will be [1,2,3]
    result.push(child)
  }
  // now, result
  return result
}

// ‼️ NOTE: THIS IS JUST A THOUGHT ON WHAT CAN BE DONE HERE
// ⚠️ LEARN ABOUT NESTED LOOPS AND NESTED ARRAYS FIRST TO REALLY UNDERSTAND WHAT YOU SHOULD DO HERE
// GOOD LUCK

createMultiplicationTable(3)


/*

one dimension = [[1, 2, 3], [2,3,1], [5,1,1]]

    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9]

*/