const numbers = [7, 9, 6, 15, 87, 35, 44];
// numbers.push(100);
// console.log(numbers);
numbers.unshift(200);
// console.log(numbers.shift());
console.log(numbers);

// spread operator
const newNumber = [...numbers];
console.log(newNumber);

numbers.push(150);
console.log(numbers);
