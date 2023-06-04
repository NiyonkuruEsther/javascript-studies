// Closures are a feature in JavaScript that allow an inner function to access and retain variables from its outer function, even after the outer function has finished executing.

function outerFunction(outerParam) {
  return function innerFunction(innerParam) {
    console.log(outerParam + innerParam);
  };
}

// To pass the outer Function you just pass as usual
// To pass to the inner function you call the assigment to that inner function

var closure = outerFunction(5); // Pass outer function
closure(10); // Pass inner function

// Closures can be used while working with the IIFE functions to be able to work with their variables which are not accessible outside
