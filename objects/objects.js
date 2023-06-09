const obj = { a: 1, b: 2, c: 3 };
const arr = [1,2,3,4,5,6]
let a = "a";

for (const elt in obj) {
  //   console.log(elt); logs entries
  console.log(obj[elt]); //logs values
  console.log(obj.elt); // Will be undefined since there is no key called elt
}

for (const elt of arr) {
  console.log(elt);
}

// console.log(obj[a]);


// To make an object iterable using the for...of loop in JavaScript, you need
//  to implement the iterable protocol. The iterable protocol requires the object 
// to have a method named Symbol.iterator that returns an iterator object. 
// The iterator object should have a method named next() which returns an object
//  with value and done properties.

const ob = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.iterator]() {
    const keys = Object.keys(this);
    let index = 0;

    return {
      next: () => {
        if (index < keys.length) {
          const key = keys[index++];
          return { value: this[key], done: false };
        }
        return { done: true };
      }
    };
  }
};

for (const elt of ob) {
  console.log(elt);
}
