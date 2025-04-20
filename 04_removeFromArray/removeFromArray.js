const removeFromArray = function(array, ...args) {
  return array.filter(val => !args.includes(val))
  }
// The rest parameter `...` stores our arguments in an
// array represented by `args` ([[1, 2, 3, 4], 3, 4]).
   // The `array` identifier points to the first element
   // in `args` ([1, 2, 3, 4]).
   // Return an array representing the elements of
   // `array` that are not found in `args` ([1, 2]).


// Do not edit below this line
module.exports = removeFromArray;
