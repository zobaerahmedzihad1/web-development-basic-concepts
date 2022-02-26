// function welcomeMessage(name, greetHandler) {
//   //   console.log(greetHandler);
//   greetHandler(name);
// }
// // const names = ["alim", "jobbar", "mujahid"];
// // const myObj = { name: "zihad", age: 19 };

// function greetMorning(name) {
//   console.log("Hello good morning", name);
// }
// function greetAfternoon(name) {
//   console.log("Hello good Afternoon", name);
// }
// function greetEvening(name) {
//   console.log("Hello good Evening", name);
// }

// welcomeMessage("zihad", greetMorning);
// welcomeMessage("tom hangry", greetAfternoon);
// welcomeMessage("leo ", greetEvening);

function welcomeMessage(name, greetMorning) {
  //   console.log(name);
  greetMorning(name);
}

function greetMorning(name) {
  console.log("Hello bro good Morning");
}

function greetAfternoon(name) {
  console.log("Hello bro good Afternoon");
}

function greetEvening(name) {
  console.log("Hello bro good Evening");
}

// calling function
welcomeMessage("zihad", greetMorning);
welcomeMessage("jon doe", greetAfternoon);
welcomeMessage("karina", greetEvening);
