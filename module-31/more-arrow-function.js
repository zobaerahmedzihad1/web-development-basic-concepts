// single parameter
const add1 = (num) => num * 5;
const result1 = add1(10);
console.log(result1);

// double parameter

const add2 = (num1, num2) => num1 + num2;
const result2 = add2(10, 20);
console.log(result2);

// three parameter

const add3 = (num1, num2, num3) => num1 + num2 + num3;
const result3 = add3(10, 20, 30);
console.log(result3);

// multi line function

const add4 = (num1, num2) => {
  const sum = num1 + num2;
  const diff = num1 - num2;
  const multi = num1 * num2;

  const result4 = sum + diff + multi;
  return result4;
};
const value = add4(10, 15);
console.log(value);
