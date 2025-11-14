/**
 * Convert a value to a string using String()
 *
 * Return an object with:
 * - result: the converted string
 * - type: typeof result (should be "string")
 */
const x = 123;
const y = x.toString();
console.log(y, typeof(y));

export function convertToString(value) {
  // TODO: Convert value to string using String()
  // TODO: Return { result: converted value, type: typeof converted value }
}
function convertToString(x, y = x.toString()){
  console.log(y, typeof(y));
}
convertToString(123);
/**
 * Convert a value to a number using Number()
 *
 * Return the numeric conversion of the value.
 * Remember the edge cases:
 * - undefined -> NaN
 * - null -> 0
 * - "" (empty string) -> 0
 * - "   " (whitespace) -> 0
 * - "123abc" -> NaN
 */
const x = 123;
const y = x.toString();
const z = Number(y);
console.log(x, typeof(x));
console.log(y, typeof(y));
console.log(z, typeof(z));

export function convertToNumber(value) {
  // TODO: Convert value to number using Number()
  // TODO: Return the result
}
function convertToNumber(a, b = Number()){
  console.log(b);
}
convertToNumber(13);
/**
 * Convert a value to a boolean using Boolean()
 *
 * Return the boolean conversion of the value.
 * Remember falsy values: 0, "", null, undefined, NaN
 * Everything else is truthy!
 */
console.log(Boolean(123));
console.log(Boolean("Hello!"));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(true));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean({name:"martin"}));

export function convertToBoolean(value) {
  // TODO: Convert value to boolean using Boolean()
  // TODO: Return the result
}
function convertToBoolean(x){
  console.log(Boolean(x));
}
convertToBoolean("It's now! or never");
/**
 * Handle conversion edge cases
 *
 * Test three conversions and return an object with results:
 * {
 *   nullToNumber: Number(null),        // Should be 0
 *   undefinedToNumber: Number(undefined), // Should be NaN
 *   emptyStringToNumber: Number("")    // Should be 0
 * }
 */
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(""));;

export function handleConversionEdgeCases() {
  // TODO: Return an object with the three conversions above
}
function handleConversionEdgeCases(obj1, obj2, obj3){
  console.log(Number(obj1, Number(obj2, Number(obj3,));
}
handleConversionEdgeCases(null, undefined, "");

/**
 * Demonstrate implicit (automatic) type conversion
 *
 * Return an object showing implicit conversions:
 * {
 *   stringPlusNumber: "5" + 3,        // String concatenation: "53"
 *   stringMinusNumber: "5" - 3,       // Numeric conversion: 2
 *   booleanToNumber: true + 1,        // true becomes 1, result: 2
 *   unaryPlus: +"42"                  // Converts to number: 42
 * }
 */
"5" + 3 = "53"  //returns string

export function demonstrateImplicitConversion() {
  // TODO: Return an object with the four implicit conversions above
}
function demonstrateImplicitConversion(obj1, obj2, obj3, obj4){
  console.log(obj1, obj2, obj3, obj4);
}
demonstrateImplicitConversion("5" + 3, "5" - 3, true + 1, +"42");
/**
 * Identify falsy values
 *
 * Given a value, return true if it's falsy, false if it's truthy.
 * Falsy values: 0, "", null, undefined, NaN, false
 *
 * Use Boolean conversion: !Boolean(value) or simply !value
 */
0, "", null, undefined, NaN, false  // are the falsy values

export function isFalsy(value) {
  // TODO: Return true if value is falsy, false if truthy
  // Hint: Use !value or !Boolean(value)
}
demonstrateImplicitConversion("5" + 3, "5" - 3, true + 1, +"42");
function isFalsy(obj1, obj2){
  console.log(!Boolean(obj1), !Boolean(obj2));
}
isFalsy(0, 123);
