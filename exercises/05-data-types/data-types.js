/**
 * Identify the type of a value using typeof operator
 *
 * Use the typeof operator to return the type of the input value as a string.
 * Note: typeof null returns "object" (this is a known JavaScript quirk)
 */
export function identifyType(value) {
  // TODO: Return the result of typeof value
}
JavaScript has 7 primitive data types:

string
number
boolean
bigint
symbol
null
undefined

typeof "John"         // Returns string
typeof ("John"+"Doe") // Returns string

function identifyType(firstName){
  console.log(typeof firstName);
}
identifyType("martin");
/**
 * Create a greeting string using template literals
 *
 * Use template literals (backticks) to create a string that says:
 * "Hello, [name]! You are [age] years old."
 *
 * Example: name="Alice", age=25 -> "Hello, Alice! You are 25 years old."
 */

const name = "martin";
const age = 48;
//const message = "Hello, " + name + ! " You are " + age + " years old.";
const message = `Hello, ${name} ! You are ${age} years old.`;
console.log(message);

export function createTemplateString(name, age) {
// TODO: Create and return a template literal string with name and age
}
function createTemplateString(name, age){
  console.log(`Hello, ${name}, ! You are ${age} years old.`);
}
createTemplateString("martin", 48);

/**
 * Check if a value is Infinity or NaN
 *
 * Return an object with two properties:
 * - isInfinity: true if the value is Infinity or -Infinity
 * - isNaN: true if the value is NaN
 *
 * Hint: Use Number.isFinite() and Number.isNaN()
 */
console.log(typeof 1/0)

let num = {
  isInfinity | -Infinity,
  isNaN
}
export function checkSpecialNumbers(value) {
  // TODO: Check if value is Infinity (use !Number.isFinite() and typeof === 'number')
  // TODO: Check if value is NaN (use Number.isNaN())
  // TODO: Return { isInfinity: ..., isNaN: ... }
}
function checkSpecialNumbers(number.isFinite, number.isNaN){
  console.log(typeof number);
}
checkSpecialNumbers(1/0, 0/2);
/**
 * Demonstrate all 8 JavaScript data types
 *
 * Return an object with examples of all 8 data types:
 * {
 *   number: a number value,
 *   bigint: a BigInt value (use 123n),
 *   string: a string value,
 *   boolean: a boolean value,
 *   nullValue: null,
 *   undefinedValue: undefined,
 *   symbol: a Symbol,
 *   object: an object
 * }
 */
console.log(typeof 1);
console.log(typeof 10n);
console.log(typeof "martin");
console.log(typeof true);
console.log(typeof );
console.log(typeof x);
console.log(typeof symbol());
console.log(typeof {name:'Martin'} );

export function demonstrateAllTypes() {
  // TODO: Create and return an object with all 8 data types
  // Use Symbol('id') for the symbol type
}
function demonstrateAllTypes(obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8){
  console.log(typeof obj1, typeof obj2, typeof obj3, typeof obj4, typeof obj5, typeof obj6, typeof obj7);
}
demonstrateAllTypes(1, true, null, "martin", 123n, {name:'martin'}, Symbol('id'), undefined);
/**
 * Differentiate between null and undefined
 *
 * Return an object showing the differences:
 * {
 *   nullType: typeof null (should be "object"),
 *   undefinedType: typeof undefined (should be "undefined"),
 *   nullEqualsUndefined: null == undefined (loose equality),
 *   nullStrictEqualsUndefined: null === undefined (strict equality)
 * }
 */
export function differentiateNullUndefined() {
  // TODO: Return an object with the four properties described above
}
null is a variale declared with no value assigned;
undefined is a variable declared with its value purposely assigned to null;

{middleName:''}  //no value assigned to variable
console.log(typeof undefined);
let middleName = null;  //value assigned to variable is 'null'


/**
 * Work with template literals and expressions
 *
 * Given two numbers, create a template literal that says:
 * "The sum of [a] and [b] is [sum]."
 *
 * Calculate the sum inside the template literal using ${a + b}
 */
export function templateWithExpression(a, b) {
  // TODO: Return a template literal with the sum calculated inside ${}
}
let a = 12;
let b = 13;
let sum = `the sum of ${a} and ${b} is ${a + b}`;
console.log(sum);