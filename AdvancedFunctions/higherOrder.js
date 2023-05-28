// They take other functions as arguments or return functions as their results

function higherOrderFunction(callback) {
  // Perform some logic
  return callback();
}

function callbackFunction() {
  console.log("Callback function executed!");
}

higherOrderFunction(callbackFunction);

// Talking about the array iteration for the higher order function the map is a higher order function which is called by passing in other type of functions to it and it performs it to what it is called upon
