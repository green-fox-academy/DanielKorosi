'use strict';
// - Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// - Log the sum of the elements in `ai` to the console

var ai = [3, 4, 5, 6, 7];

var sum = ai.reduce(function(total, element) {
  return total+element;
});
console.log(sum);
