# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @j-nny/lotide`

**Require it:**

`const _ = require('@j-nny/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: takes an array and returns the element at the first index
* `tail(array)`: takes an array and returns all elements after the first index
* `middle(array)`: takes an array and returns the middle element (one element for odd number, two elements for even number)
* `assertArraysEqual([arr1], [arr1])`: assertion that compares two arrays and returns true or false
* `assertEqual(val1, val2)`: assertion that compares two primitives and returns true or false
* `eqArrays([arr1], [arr2])`: compares two arrays and returns true or false
* `without(source, itemsToRemove)`: takes an array and returns the modified array without the unwanted elements
* `flatten(array)`: takes a nested array and returns a 'flattened' array with just the elements
* `countOnly(allItems, itemsToCount)`: takes an array and returns the number of the desired elements to count
* `countLetters(string)`: takes a string and returns the number of desired letters to count
* `letterPositions(sentence)`: takes a string and returns the indices of the desired letter
* `findKeyByValue(object, value)`: takes an object and returns the key of the value argument
* `eqObject(object1, object2)`: compares two objects and returns true or false
* `assertObjectsEqual(actual, expected)`: assertion that compares two objects and returns true or false
* `map(array, callback)`: takes an array and returns a new array containing the results of the inputted callback function
* `takeUntil(array, callback)`: takes an array and returns elements of the array until the callback returns truthy
* `findKey(array, callback)`: takes an array and returns the index of the first element that returns truthy