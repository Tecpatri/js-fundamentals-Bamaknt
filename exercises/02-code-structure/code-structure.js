// TODO: Implement the functions below

export function sum (a, b) {
  // Return the sum of two numbers
  // Remember to use semicolons properly
  return a + b
}
sum(7, 5)

export function multiStatement (x) {
  // Create multiple statements (at least 2)
  // First, multiply x by 2 and store in a variable
  // Then, add 10 to that variable
  // Finally, return the result
  let result = x * 2
  result = result + 10
  return result
}
multiStatement(5)

export function withComments (value) {
  // Add a single-line comment explaining what the next line does
  // Then return the value multiplied by 3

  // The next line will return the result as (value * 3)
  return value * 3
}
withComments(4) // returns 12

export function withMultilineComment (a, b, c) {
  // Add a multi-line comment (/* ... */) that explains this function
  // takes three numbers and returns their sum
  // Then implement the sum
  /* let num1;
  let num2;
  let num3;
  return sum
  */
  return a + b + c
}
withMultilineComment(4, 5, 6)
