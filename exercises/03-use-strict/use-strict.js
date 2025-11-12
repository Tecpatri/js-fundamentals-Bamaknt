// TODO: Implement the functions below
// Note: ES modules (files using import/export) are automatically in strict mode

export function demonstrateStrictMode() {
  'use strict';
  // In strict mode, 'this' in a function is undefined (not window/global)
  // Return true if we're in strict mode, false otherwise
  return (function () { return this; })() === undefined;
}
function demonstrateStrictMode(){
  'use strict';
  console.log(this);
}
demonstrateStrictMode();
export function noUndeclaredVariables() {
  'use strict';
  // In strict mode, you cannot use variables without declaring them
  // This function should return a properly declared variable value
  // Declare a variable 'message' with value "strict mode works"
  // and return it
}
function declaredValue(){
  'use strict';
  let message = "strict mode works";
  console.log(message);
}
declaredValue();
export function noDelete() {
  'use strict';
  // In strict mode, you cannot delete variables
  // Create a variable and try to demonstrate that deletion isn't allowed
  // Return the variable value (don't actually try to delete, just return a value)
  const value = 42;
  return value;
}
function noDelete(){
  'use strict';
  const value = 42;
  delete (value);
}
noDelete();
