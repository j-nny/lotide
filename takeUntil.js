const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// function returns values until item = value from callback function

const takeUntil = function(array, callback) {
  const results = []
  for (let item of array) {
    if (callback(item)) { // passes through item into the callback function (x)
      break; // breaks the loop when the callback(item)
    } else {
      results.push(item); // otherwise pushes the item into the results array
    }
  } return results;
};

module.exports = takeUntil;

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// assertArraysEqual((takeUntil(data2, x => x === ',')), [ 'I\'ve', 'been', 'to', 'Hollywood' ])
// assertArraysEqual((takeUntil(data1, x => x < 0)), [ 1, 2, 5, 7, 2 ])
