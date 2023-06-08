function getArrayDepth(arr) {
  let maxDepth = 0;

  // Recursive helper function
  function findDepth(array, depth) {
    if (Array.isArray(array)) {
      depth++;

      if (depth > maxDepth) {
        maxDepth = depth;
      }

      array.forEach(function (element) {
        findDepth(element, depth);
      });
    }
  }

  findDepth(arr, 0);

  return maxDepth;
}

// Example usage
let nestedArray = [1, [2, [3, [4]]]];
console.log(getArrayDepth(nestedArray)); // Output: 4
