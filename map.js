const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// TESTING MAP FUNCTION:

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(results1[0], ['g']);
// assertArraysEqual(results1[4], ['t']);