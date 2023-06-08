function depth(arr) {
  let maxD = 0;
  function arrayDepth(array, depth) {
    if (Array.isArray(array)) {
      depth++;
      if (depth > maxD) {
        maxD = depth;
      }
      array.forEach(function (element) {
        arrayDepth(element, depth);
      });
    }
  }
  arrayDepth(arr, 0);
  return maxD;
}

console.log(
  depth([1, 2, 3, [2, 3], [2, (4),[(5, 7)], [3, 4, [2, 5, 6, [7, 7]]]]])
);
