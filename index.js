const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const without = require('./without');
const flatten = require('./flatten');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const map = require('./map');
const takeUntil = require('./takeUntil');
const findKey = require('./findKey');

module.exports = {
  head,  
  tail,  
  middle,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  without,
  flatten,
  countOnly,
  countLetters,
  letterPositions,
  findKeyByValue,
  eqObjects,
  assertObjectsEqual,
  map,
  takeUntil,
  findKey
};