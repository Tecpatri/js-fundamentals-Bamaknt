/**
 * Demonstrate object reference behavior
 *
 * Create a new variable that references the same object.
 * Modify a property through the new reference.
 * Both variables should point to the same object.
 */
export function demonstrateReference (user) {
  // TODO: Create a new variable admin that points to the same object as user
  // TODO: Set admin.role to 'administrator'
  // TODO: Return admin (both user and admin should reference the same object)

  const admin = user;
  admin.role = 'administrator';

  return admin;
}


/**
 * Compare primitive values
 *
 * Primitives are compared by value.
 * Return true if the two values are equal, false otherwise.
 */
export function comparePrimitives (a, b) {
  // TODO: Return true if a equals b
  if ( a == b ) {
    return true;
  }else {
    return false;
  }
}

/**
 * Compare object references
 *
 * Objects are compared by reference, not by content.
 * Return true if both variables reference the same object.
 */
export function compareObjectReferences (obj1, obj2) {
  // TODO: Return true if obj1 and obj2 reference the same object

  return obj1 === obj2
  
}
//const obj1 = { gender: 'Male'}
//const obj2 = { gender: 'Male'}
/**
 * Create independent copy - wrong approach
 *
 * This demonstrates what NOT to do.
 * Just assigning to a new variable doesn't create a copy!
 * Return a new variable that references the original object.
 */
export function notACopy (original) {
  // TODO: Create a variable 'copy' that references original
  // TODO: Return copy (it's NOT actually a copy, just another reference)
  const copy = original

  return copy
}

/**
 * Shallow copy with Object.assign
 *
 * Create a shallow copy of the object using Object.assign.
 * The copy should have the same properties but be a different object.
 * original {
 * name
 * age
 * }
 */
export function shallowCopy (original) {
  // TODO: Use Object.assign to copy properties to a new empty object
  // TODO: Return the new object

  const copy = Object.assign({}, original)

  return copy

  /*
  // const original = { name: 'Alex', work: { staff: 'Drive' } }

  const copy = {...original }

  copy.name = 'John'
  copy.work.staff = 'Supervisor'
  */

}
let original = { name: 'Martin', age: 38, grade: 'B'}

shallowCopy(original)

/**
 * Shallow copy with spread operator
 *
 * Create a shallow copy using the spread operator {...obj}.
 * Return the new object.
 */
export function shallowCopyWithSpread (original) {
  // TODO: Use spread operator to create a copy
  // TODO: Return {...original}
  //

  return { ...original }
}

/**
 * Demonstrate shallow copy limitation
 *
 * Shallow copies only copy the top level.
 * Nested objects are still referenced!
 *
 * Copy the user object, then modify a property in the nested 'address' object.
 * Return the copy.
 */
export function demonstrateShallowCopyProblem (user) {
  // TODO: Create a shallow copy of user
  // TODO: Modify user.address.city to 'Boston' (this affects both objects!)
  // TODO: Return the copy

  const copy = { ...user }

  copy.address.city = 'Boston'
  
  return copy
}

export function deepCopy (original) {
  // TODO: Use structuredClone to create a deep copy
  // TODO: Return the deep copy

  const copy = structuredClone(original)

  return copy
}
 
/**
 * Merge objects with Object.assign
 *
 * Merge the properties from source into target.
 * If properties exist in both, source values should override target values.
 * Return the target object.
 */
export function mergeObjects (target, source) {
  // TODO: Use Object.assign to merge source into target
  // TODO: Return target

  Object.assign(target, source)

  return target
}
let source = { job: 'Dev', items: { pc: 1, laptop: 1, web: true } }
let target = { name: 'Art', sizes: { height: 183, width: 60 } }

/**
 * Merge multiple objects
 *
 * Merge obj1, obj2, and obj3 into a new object.
 * Later objects should override earlier ones.
 * Don't modify the original objects.
 */
export function mergeMultiple (obj1, obj2, obj3) {
  // TODO: Use Object.assign to merge all three into a new empty object
  // TODO: Return the new merged object

  
  const copy = Object.assign( {}, obj1, obj2, obj3 )

  return copy
}
let obj1 = { title1: 'Chief'}
let obj2 = { title2: 'Secretary'}
let obj3 = { title3: 'Director'}

/**
 * Clone and modify
 *
 * Create a copy of the user object and add a new property 'status' = 'active'
 * The original object should not be modified.
 * Return the modified copy.
 */
export function cloneAndModify (user) {
  // TODO: Create a copy using spread operator or Object.assign
  // TODO: Add status property to the copy
  // TODO: Return the modified copy
  
  const copy = { ...user }

  copy.status = 'active'

  return copy

}


/**
 * Test if modification affects original
 *
 * Create a shallow copy, modify a top-level property in the copy,
 * then check if the original was affected.
 * Return true if original was NOT affected, false if it was.
 */
export function testIndependence (obj) {
  // TODO: Create a shallow copy
  // TODO: Add a new property to the copy (e.g., test = true)
  // TODO: Return true if 'test' property doesn't exist in original
  

  const copy = Object.assign({}, obj)
  copy.test = true

  return !('test' in obj)
}
// const obj = { first: 'Bill', rank: { second: 'Ben' } }

/**
 * Demonstrate const with objects
 *
 * Even though the variable is const, object properties can be modified.
 * Add a property 'modified' = true to the object and return it.
 */
export function modifyConstObject (obj) {
  // TODO: Add modified property set to true
  // TODO: Return obj (note: obj itself is const but its properties can change)
  
  obj.modified = true

  return obj

}


/**
 * Array of objects - reference issue
 *
 * Given an array of user objects, create a new array with the same objects.
 * The array itself should be different, but the objects inside are still references.
 */
export function copyArrayOfObjects (users) {
  // TODO: Create a copy of the array (e.g., using spread operator or slice)
  // TODO: Return the new array
  // Note: The objects inside are still the same references!

  
  return  [...users]  // spread operator
}

/**
 * Deep clone array of objects
 *
 * Create a deep copy of an array containing objects.
 * Both the array and all objects inside should be independent copies.
 */
export function deepCopyArray (arr) {
  // TODO: Use structuredClone to deep copy the entire array
  // TODO: Return the deep copy
  
  return structuredClone(arr)

 
}
const arr = [{ id: 32, specialist: { title: 'Dev', grade: 'Senior'}}]

deepCopyArray(arr)