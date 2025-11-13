/**
 * Create a user profile object using const
 *
 * Declare a const variable named 'user' that contains an object with:
 * - name: the provided name parameter
 * - age: the provided age parameter
 * - isActive: true
 *
 * Return the user object.
 */
const surName = "martin";
const name = "daflon";
const birthDate = "01.01.1970";
const eMail = "d.mart@gmail.com";
const phoneNumber = "0123456789";

const user = {name:"daflon", age:"55", isActive: true}

function createUser(name, age, isActive){
  console.log(name, age, isActive);
}
createUser("daflon", 30, "true");


export function createUserProfile(name, age) {
  // TODO: Declare a const variable 'user' with an object containing name, age, and isActive
  // TODO: Return the user object
}
function createUserProfile(name, age, isActive){
  console.log(name, age, isActive);
}
createUserProfile("daflon", 30, "true");
/**
 * Update a counter using let
 *
 * Declare a let variable named 'counter' initialized to 0.
 * Increment it by the amount specified in the parameter.
 * Return the final counter value.
 */
export function updateCounter(increment) {
  // TODO: Declare a let variable 'counter' set to 0
  // TODO: Add the increment value to counter
  // TODO: Return the counter value
}
let counter = 0;
while(counter <= 5){
  console.log(counter);
  counter++;

/**
 * Calculate rectangle area using multiple variable declarations
 *
 * Declare TWO const variables in a SINGLE statement:
 * - width: set to the width parameter
 * - height: set to the height parameter
 *
 * Then calculate and return width * height.
 */
let width = 10;
let height = 8;
let area = width * height;
console.log(area);
export function calculateRectangleArea(width, height) {
  // TODO: Declare width and height as const variables in ONE statement
  // TODO: Return the area (width * height)
}
function calculateRectangleArea(width, height){
  console.log(width * height)
}
calculateRectangleArea(10, 8);
/**
 * Declare constants that cannot be reassigned
 *
 * Create a const variable named 'MAX_USERS' set to 100.
 * Create a const variable named 'APP_NAME' set to 'MyApp'.
 *
 * Return an object with both constants.
 */
export function declareConstants() {
  // TODO: Declare MAX_USERS as const, set to 100
  // TODO: Declare APP_NAME as const, set to 'MyApp'
  // TODO: Return an object with both: { MAX_USERS, APP_NAME }
}
function declareConstants(MAX_USERS, APP_NAME) {
  console.log(MAX_USERS, APP_NAME);
}
declareConstants(100, 'MyApp');

/**
 * Use descriptive variable names following camelCase convention
 *
 * Given a person's first name and last name,
 * declare a variable named 'fullName' that combines them with a space.
 * Declare a variable named 'nameLength' that stores the length of fullName.
 *
 * Return an object with both values.
 */
let userName;
let firstName;
let fullName;
let birthDate;

let firstName = "martin"; let lastName = "daflon";
let fullName = "martin daflon";
let nameLength = 12;

constUser = {firstName:"martin", lastName:"daflon", nameLength: 12};

export function useDescriptiveNames(firstName, lastName) {
  // TODO: Declare 'fullName' as a const - combine firstName + " " + lastName
  // TODO: Declare 'nameLength' as a const - get the length of fullName
  // TODO: Return { fullName, nameLength }
}
function useDescriptiveNames(firstName, lastName, nameLength){
  console.log(firstName, lastName, nameLength);
}
useDescriptiveNames("martin", "daflon", 12);
/**
 * Demonstrate let vs const - reassignment
 *
 * Declare a let variable 'score' set to initialScore.
 * Add bonusPoints to score.
 *
 * Declare a const variable 'maxScore' set to 100.
 *
 * Return an object with both values.
 */
let name = "john";
name = "yves";
console.log(name);

const name = "john";
name = "yves";
console.log(name);

export function demonstrateLetVsConst(initialScore, bonusPoints) {
  // TODO: Declare 'score' as let, set to initialScore
  // TODO: Add bonusPoints to score
  // TODO: Declare 'maxScore' as const, set to 100
  // TODO: Return { score, maxScore }
}
let score = initialScore;
score = score + bonusPoints;
const maxScore = 100;
return (score, maxScore);

function demonstrateLetVsConst(initialScore, bonusPoints){
  console.log(score);
}
demonstrateLetVsConst(0, 10);