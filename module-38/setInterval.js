console.log("First");

// setInterval
// setInterval(() => {
//   console.log("Repeat");
// }, 3000);

// console.log("Second");

let seconds = 0;
const timeId = setInterval(() => {
  //   seconds++;
  console.log(++seconds);
  if (seconds > 7) {
    clearInterval(timeId);
    console.log("Now I am cleared.");
  }
}, 2000);
