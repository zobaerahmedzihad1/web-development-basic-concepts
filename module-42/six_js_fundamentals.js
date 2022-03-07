// how to declare a variable

const name = "zihad";
let season = "rainy";
season = "winter";

// six basic conditions: < , < , ===, !==, =<, =>
// multiple conditions: || (or operator) && (and operator)
if (name === "zihad") {
  console.log("yes, you are right.");
} else {
  console.log("you are wrong.");
}

// array declare, array.length, array.push, array.pop, array.shift ,array.unshift

const numbers = [15, 75, 98, 37, 7, 13];

// for loop
for (let i = 0; i > numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

//  function
function add(num1, num2) {
  const sum = num1 + num2;
}
console.log(add(7, 6));

const add2 = (num1, num2) => {
  const add2 = num1 + num2;
};
console.log(add2(7, 38));

// object and how to access object property

const details = {
  name: "zihad",
  age: 19,
  from: "Barishal",
  sports: ["cricket", "football", "card"],
};
console.log(details.name);
console.log(details["name"]);
