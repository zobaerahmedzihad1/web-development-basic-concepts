// different ways we will get undefined

// 1. variable de variable value not assigned.
let hello;
console.log(hello);

//2. function but did not write return.
function second(x, y) {
  const sum = x + y;
}
const result = second(7, 2);
console.log(result);

//3. just wrote written but didn't return anything.
function add(a, b) {
  const sum = a + b;
  if (b < 10) {
    return;
  }
  const multi = a * b;
  return sum;
}
const result2 = add(5, 3);
console.log(result2);

// 4. parameter that isn't passed.
function add2(a, b) {
  const sum = a + b;
}
const result3 = add2(10);
console.log(result3);

// 5. property that doesn't exist in an object.
const person = { name: "zihad", age: 19, location: "Dhaka" };
// console.log(person.phoneNumber);

// 6. accessing array element out of range.
const ages = [15, 21, 36, 18, 14];
console.log(ages[7]);

// 7. accessing deleted array element.
delete ages[3];
console.log(ages[3]);

//  8. Explicitly set value to undefined;
const hello1 = undefined;
console.log(hello);

//  Null
const myObj = { name: "zihad", profession: null };
console.log(myObj.profession);
