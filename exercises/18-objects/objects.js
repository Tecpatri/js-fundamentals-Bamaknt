/**
 * Create a user object
 *
 * Create and return an object with the following properties:
 * - name: provided name parameter
 * - age: provided age parameter
 * - city: provided city parameter
 */
export function createUser (name, age, city) {
  // TODO: Create and return an object with name, age, and city properties
  return { name: name,  age: age, city: city }; 
}
createUser('Martin', 25, 'Abuja')
/**
 * Access object properties using dot notation
 *
 * Given an object, return the value of its 'title' property
 */
export function getTitle (book) {
    return book.title
}
const book = { "title": "Achieve the impossible", "author": "Bama", "edition": "Nea" }
getTitle(book);

/**
 * Access object properties using bracket notation
 *
 * Given an object and a property name (as a string),
 * return the value of that property using bracket notation
 */
export function getProperty (obj, propertyName) {
  // TODO: Return the value of obj[propertyName]
  return obj[propertyName];
}
const pilot = { "mission": "Fighter", "grade": "A", "name": "Jake" };
pilot["mission"];  // returns Fighter

/**
 * Add a new property to an object
 *
 * Add a property called 'email' with the provided email value
 * to the user object. Return the modified object.
 */
export function addEmail (user, email) {
  // TODO: Add an 'email' property to the user object
  // TODO: Return the user object
   return user;
}
const teacher = { firsname: "John", age: "35" };
addEmail(teacher , teacher.email = "jhn@cs.com");

/**
 * Modify an existing property
 *
 * Update the 'price' property of the product object
 * to the new price value. Return the modified object.
 */
export function updatePrice (product, newPrice) {
  // TODO: Update the price property
  // TODO: Return the product object
   product.price = newPrice;
    return product;
}
const item = { name: "Pc", "price": 1000, brand: 'Hp' };
updatePrice(item, 1300);

/**
 * Delete a property from an object
 *
 * Remove the 'password' property from the user object.
 * Return the modified object.
 */
export function removePassword (user) {
  // TODO: Delete the password property
  // TODO: Return the user object
  delete user.password;
  return user;
}
const user = { name: "Alex", password: "12345"};
removePassword(user);

/**
 * Check if a property exists using the 'in' operator
 *
 * Return true if the object has the specified property,
 * false otherwise.
 */
export function hasProperty (obj, propertyName) {
  // TODO: Use the 'in' operator to check if propertyName exists in obj
  return propertyName in obj;
}
const plane = { name: "Jet", brand: "Boeing" };
hasProperty("plane", "brand");

/**
 * Create an object with computed property names
 *
 * Create an object where the property name is determined by
 * the 'key' parameter and its value is the 'value' parameter.
 *
 * Example: createDynamicObject('color', 'blue')
 * should return { color: 'blue' }
 */
export function createDynamicObject (key, value) {
  // TODO: Create an object with a computed property name [key]
  return {
    [key]: value,
  }
}
createDynamicObject("email", "btc@cs.com");

/*
const team = { coach: "Elton", captain: "Hisham", goals: 110 };
team
{coach: 'Elton', captain: 'Hisham', goals: 110}
const key = "shoots";
const team = { coach: "Elton", captain: "Hisham", [key]: 110 };
team;
*/

/**
 * Use property shorthand
 *
 * Create an object with name, age, and city properties
 * using the shorthand syntax when variable names match property names.
 */
export function createPersonShorthand (name, age, city) {
  // TODO: Return an object using property shorthand {name, age, city}
  return { name, age, city };
}
createPersonShorthand("Marvin", 32, "Abuja");

/**
 * Check for property existence (distinguish from undefined value)
 *
 * Return true if the object has the property (even if its value is undefined),
 * false if it doesn't have the property at all.
 */
export function propertyExists (obj, prop) {
  // TODO: Use 'in' operator to check existence (not undefined check)
  return prop in obj; 
}
const house = { model: "triplex", price: 100000 };
propertyExists(house, price);

/**
 * Iterate over object properties
 *
 * Given an object, return an array of all its property names (keys).
 * Use a for...in loop.
 */
export function getKeys (obj) {
  // TODO: Create an empty array
  // TODO: Use for...in loop to iterate over properties
  // TODO: Add each key to the array
  // TODO: Return the array of keys
  const keys = [];
  for (let keys in obj) {
    keys.push(key);
  }
  return keys;
}
const player = { name: "Jordan", team: "Bulls", city: "Chicago" };
getKeys(player);

/**
 * Iterate and sum numeric properties
 *
 * Given an object with numeric values, return the sum of all values.
 * Use a for...in loop to iterate over the properties.
 */
export function sumValues (obj) {
  // TODO: Initialize sum to 0
  // TODO: Use for...in to iterate over properties
  // TODO: Add each value to sum
  // TODO: Return sum
  let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}
const basket = { apple: 75, orange: 75, beans: 85 };
sumValues(basket);

/**
 * Create a method in an object
 *
 * Create and return an object with:
 * - a 'count' property set to 0
 * - an 'increment' method that increases count by 1
 *
 * Note: The method should be a regular function, not an arrow function
 */
export function createCounter () {
  // TODO: Create an object with count property and increment method
  const count = {
    count: 0,
    increment() {
      this.count += 1
    }
  }
}
createCounter();

/**
 * Multiword property names
 *
 * Create an object with a property named "likes birds" (with a space)
 * set to true. Return the object.
 */
export function createObjectWithMultiwordProperty () {
  // TODO: Create an object with a "likes birds" property
  // TODO: Must use quotes around the property name
  return { "Likes biirds": true}
}
const obj = createPersonShorthand();
console.log(obj["Likes birds"]);

/**
 * Access multiword properties
 *
 * Given an object with multiword property names,
 * return the value of the property specified by propertyName.
 * Must use bracket notation.
 */
export function getMultiwordProperty (obj, propertyName) {
  // TODO: Return obj[propertyName]
  return obj[propertyName]
}
const student = {
  "First name": "Hisham",
  "Home town": "Abidjan",
  "School name": "Moyen seminaire"
}
getMultiwordProperty(student["Home town"]);