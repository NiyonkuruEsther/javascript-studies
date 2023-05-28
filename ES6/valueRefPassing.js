//value types (primitives): Number, String, Boolean, Symbol, undefined and null
//reference types (objects): Object, Function and Array

//!When we use an object it is not stored in the variable instead it is stored somewhere else in the memory and the adress is the one that is stored in the variable

let x = { value: 20 };
let y = x;
// y is also equal to the adress of the object in the memory
x.value = 20;
//!thus both x and y are pointing to the same adress in the memory

//! To conclude the primitives are copied by value and objects are copied by reference

let num = { num: 10 };
function increase(number) {
  return number.num++;
}
//we went in the memory and then we incremented the num by 1 then we finally have num.num = 11
console.log(num, increase(num));
