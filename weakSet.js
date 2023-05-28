//this is a type of map that deals with objects not 2 dimensional arrays
// If there is no variable which are not recently used
//
//!What is the isseu with my WeakSetMap and look for how to use the weakset map along wiht the iterators
let carWeakSet = new WeakSet();
console.log(carWeakSet);
var car1 = {
  make: "Honda",
  model: "Civic",
};
// console.log(car1, typeof car1);
carWeakSet.add(car1);
let car2 = car1;
// car1 = 0;
car1 = 0;
console.log(carWeakSet.has(car2));
