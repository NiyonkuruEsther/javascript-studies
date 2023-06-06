const obj = { a: 1, b: 2, c: 3 };

let a = "a";

for (const elt in obj) {
  //   console.log(elt); logs entries
  console.log(obj[elt]); //logs values
}

// console.log(obj[a]);
