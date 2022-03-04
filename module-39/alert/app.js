// alert("Hey are you ready");

const clickToAlert = () => {
  alert("Hey bro are you ready");
};

const askSomething = () => {
  const response = confirm("Are you ready to go ...??");
  console.log(response);

  if (response === true) {
    alert("Please come to airport.");
  } else {
    alert("Go to the hell");
  }
};

const askingName = () => {
  const name = prompt("What is your name");
  alert(`Your name is ${name}`);
};
