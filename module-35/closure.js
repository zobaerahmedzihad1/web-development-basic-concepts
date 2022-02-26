function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
let clock1 = stopWatch();
console.log(clock1()); // 1
console.log(clock1()); // 2
console.log(clock1()); // 3
console.log(clock1()); // 4

// clock 2 is totally separate.
let clock2 = stopWatch(); // 1
console.log(clock2()); // 2
