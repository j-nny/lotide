const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let withoutItems = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i]) === false) {
      withoutItems.push(source[i]);
    }
  } return withoutItems;
};

module.exports = without;

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
// const words = ["hello", "world", "lighthouse"];
// console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);