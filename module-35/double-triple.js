// Check with double equal (==)
const first = 7;
const second = 7;
if (first == second) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

// Check with triple equal (===)
const First = 7;
const Second = "7";
if (First === Second) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

// object and array can not compare with double equal (==) or triple equal (===)
const a = { name: "zihad" };
const b = { name: "zihad" };
if (a == b) {
  console.log("Both Object are same");
} else {
  console.log("Both Object are not same");
}

//  or

const x = [1, 2];
const y = [1, 2];
if (x === y) {
  console.log("Array are same");
} else {
  console.log("Array are not same");
}
