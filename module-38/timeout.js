const doSomething = () => {
  console.log("Now I am codding javascript");
};
console.log("I am number one");
// doSomething()
setTimeout(doSomething, 6000);
setTimeout(function () {
  console.log("I am execute after 7 second.");
}, 7000);

setTimeout(() => {
  console.log("I am execute after 4 second.");
}, 4000);
console.log("I am number two");
console.log("I am number three");
