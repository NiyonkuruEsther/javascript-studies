//Let's first talk about the iterator protocol
//The iterator protocol is simply a set of rules that have to be met for an object to be called itarable
let nums = [1, 2, 3, 4];
let iter = makeIterator(nums);
//We make a function that iterates through the array
function makeIterator(arr) {
  var i = 0;
  return {
    //We use the next object to define the iteration process
    next: function () {
      // we then return another object to define the value and the done properties of the function
      if (i > arr.length - 1) return { value: undefined, done: true };
      return { value: arr[i++], done: false };
    },
  };
}
console.log(iter.next());
//From the above function we can see that the iterator is user defined
//  So there is this famous @@iterator() that will set the iterator protocols for the array and allows tha array to be iterable
// The @@iterator returns an iterator that yields the value of each index in the array.
//So let's now use the @@iterator
let iterator = nums[Symbol.iterator]();
console.log(iterator.next().value);
for (let i of iterator) {
  console.log();
}

// a generator is anything that can define capabilities which is a function since any other data type can't define the sequence
// A generator
