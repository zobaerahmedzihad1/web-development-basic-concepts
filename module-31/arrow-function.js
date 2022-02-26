// default function
function add(num1, num2) {
  return num1 + num2;
}
const sum1 = add(15, 18);
console.log(sum1);

// function with variable
const add2 = function add(num1, num2) {
  return num1 + num2;
};
const sum2 = add2(15, 18);
console.log(sum2);

// without function name (anonymous)
const add3 = function (num1, num2) {
  return num1 + num2;
};
const sum3 = add3(15, 18);
console.log(sum3);

// ARROW FUNCTION
const add4 = (num1, num2) => num1 + num2;
const sum4 = add4(15, 18);
console.log(sum4);
