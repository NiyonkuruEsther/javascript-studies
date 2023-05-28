//a map is a key-value pair to contrast with the set with is a single value

const myArray = [
  ["a1", "hello"],
  ["a2", "world"],
  ["a3", "worldly"],
];
let myMap = new Map(myArray);
//we don't have .add() instead we have .set()

myMap.set("c3", "hello");
console.log(myMap.delete("a2"), myMap); //we deleted keys only and it will return true if deleted or flse if faileds
