//!Higher oder function
//it is a type of function that accepts another function as a parameter or returns a function as a value or both
//!It is considered a higher order function if it supports first class functions
function higherOrder(firstOrder) {
  return firstOrder;
}

console.log(higherOrder(firstOrder()));

//!First order function
//It is a type of function that doesn't accepts another function as a parameter or return it

function firstOrder(s) {
  return "something";
}

//!First class function
//These are functions that can be treated as any other value.... and since functions are objects they can be treated like any other value....
//i.e: 1. You can assign a function to  a variable like any other value
//     2. You can pass a function as an argument to another function
//     3. You can return a function form another function
//!Thus all functions are first class functions

//!Callback function
//A call back function is simply an arrow function with no name

//!Immediately invoked Function Expression(IIFE)
//Has no name and it's parameter are passed next to it
var prefix = "NO";

(function (word) {
  console.log(prefix, word);
})("hello world");
//it executes only once
//!This is needed for privacy, there is no collision of the data
function Hello() {
  return prefix;
}
console.log(Hello());
console.log(prefix);

//!Closure functions
//It is function that is inclosed in another function

//Remaining functions: 1. Recursive functions 2. Anonymous functions 3. Closure functions
