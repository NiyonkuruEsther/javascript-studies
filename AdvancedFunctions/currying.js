function add(a, b, c) {
  return a + b + c;
}

// Curry the 'add' function
const curriedAdd = curry(add);

// Call the curried function with partial arguments
const addFive = curriedAdd(2)(3);

// Call the curried function with the final argument
const result = addFive(4);

console.log(result); // Output: 9
