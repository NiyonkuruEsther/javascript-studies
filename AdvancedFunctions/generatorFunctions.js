function* simpleGenerator() {
  //We consider the yield as mini returns and which lets us return a value and continue iterating in the generator function
  yield 1;
  yield 2;
  yield 3;
}
//the next() is used to return the value and the done status of the generator function
const generatorObject = simpleGenerator();
console.log(generatorObject.next());
console.log(generatorObject.next());
//We can also access one of the next properites
console.log(generatorObject.next().value);
console.log(generatorObject.next().done);
//lastly it will say the undefined value and the done false!
//simply the next return an object of the done state and the yielded value
function* generateId() {
  let id = 1;
  while (true) {
    const increment = yield id;
    if (increment != null) {
      id = id + increment;
    } else {
      id++;
    }
  }
}
const gen = generateId();
console.log(gen.next().value);
//the value passed in the next will be returned from the current yield statement
console.log(gen.next(3).value, "another one");
//!this becomes 4 why?
//to end the generator without going through all the possible iterations you can use return

function* createSundae() {
  const toppings = [];

  toppings.push(yield);
  toppings.push(yield);
  toppings.push(yield);

  return toppings;
}

var it = createSundae();
console.log(it.next("hot fudge"));
console.log(it.next("sprinkles"));
console.log(it.next("whipped cream"));
console.log(it.next());

// generators were introduced in the ES2015
// it is a type of iterator
// an iterator is something that has a next method that returns an object of a specific shape
// where that object will have a value and a done properties
// the generator functions when called it gives the generator object which is the iterator
// the yield will let you pause your execution
// the generator function vs the generator object
// generator objects are returnes by the generator function
// generators are iterable 
