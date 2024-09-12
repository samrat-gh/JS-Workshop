// Regular Function
// This is a normal function that calculates the cube of a number
function cube(a) {
  return a * a * a; // Returns a cubed
}

const num = cube(9); // Calls the function with 9 and stores the result in num

// Arrow Function
// Arrow functions provide a shorter syntax for writing functions
// This arrow function does the same thing as the regular function above
const cube2 = (a) => a * a * a;

// The above arrow function is equivalent to:
// const cube2 = (a) => {
//   return a * a * a; // Explicit return
// }

const num2 = cube2(3); // Calls the arrow function with 3 and stores the result in num2

console.log(num); // Output: 729 (9 cubed)
console.log(num2); // Output: 27 (3 cubed)
