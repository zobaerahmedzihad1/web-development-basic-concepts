// number to string conversion short cart.
const num1 = 47;
const numStr = num1 + "";
console.log(typeof numStr, numStr);

// string to number conversion short cart.
const input = "548";
const inputNum = +input;
console.log(typeof inputNum, inputNum);

// ternary operator
const amount = 570;
const food = amount < 700 ? "Briyani" : "alu puri";
console.log(food);

const isActive = false;
const displayUser = () => console.log("Display user");
const hideUser = () => console.log("Hide user");

isActive ? displayUser() : hideUser();
