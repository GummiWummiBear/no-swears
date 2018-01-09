"use strict";

const noswears = require("./index");

let badString = "hell brainfuck is a weird bitch";

noswears.filter(badString, goodString => {
  var expected = "**** brain**** is a weird *****";
  console.log(
    'Testing filter\nWant string "' + expected + '", got',
    goodString
  );
  if (goodString == expected) {
    console.log("✔ Success!\n");
  } else {
    console.log("✖ Failed!\n");
  }
});

noswears.hasSwears(badString, swearBool => {
  console.log("Testing hasSwears\nWant true, got", swearBool);
  if (swearBool == true) {
    console.log("✔ Success!\n");
  } else {
    console.log("✖ Failed!\n");
  }
});


var hasSwearsSyncResult = noswears.hasSwearsSync(badString)
console.log("\nTesting hasSwearsSync\nWant true, got", hasSwearsSyncResult)
if (hasSwearsSyncResult) {
  console.log("✔ Success!\n");
} else {
  console.log("✖ Failed!\n");
}
