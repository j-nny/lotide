const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🛑Assertion Failed: " + actual + " !== " + expected);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Hello", "Hello");
assertEqual(10, 14);
assertEqual(1, 1);