//the sets are there to even remove all the elements that are similar
//sets are not indexed based
//items in a set can’t be accessed individually
//they are objects
//set can store different elements types
const games = new Set([1, 2, 4, 2, 6, 4]);
//or you can pass in an array containing the above data
// to add an element to the set you use the .add() method
// to remove use can use the .delete() method
//.add() returns the Set if an item is successfully added. On the other hand, .delete() returns a Boolean (true or false) depending on successful deletion.
games.delete(2);
games.add(3);
//with .clear() we clear everything in the set
//to check for the existence of an item in the set you use the .has() method
console.log(games.has(1));
//to display the size of the set you use the .size
//to display the vlues of the set you use the .values() method which is a setIterator object
console.log(games.size, games.values(), games);
//you can use the for of loop to iterate over the set
for (const number of games) {
  console.log(number);
}
