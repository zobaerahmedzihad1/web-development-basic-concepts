//  Array Destructuring
const addition = (num1, num2) => {
  const nums = [num1, num2];
  return nums;
};

const [first, second] = addition(10, 17);
console.log(first, second);
// console.log(addition(10, 20));

const personDetails = {
  name: "zihad",
  age: 19,
  from: "bangladesh.",
  sports: ["cricket", "football", "badminton"],
};

const [one, two, three] = personDetails.sports;
console.log(one, two, three);

// object Destructuring

const { isWife, job } = {
  name: "Mosaddek",
  hometown: "Norail",
  job: "cricketer",
  isWife: true,
};
console.log(isWife, job);

const person = {
  name: "zihad",
  age: 19,
  from: "Bangladesh",
  hometown: "Barishal",
};
const { hometown, name } = person;
console.log(hometown, name);

const employee = {
  name: "zihad",
  id: 749,
  address: "Dhaka",
  language: ["java", "paython", "javascript", "kotlin"],
  position: "web developer",
  personDetails: { father: true, mother: true, wife: false },
  movie: {
    english: ["extraction", "wild life", "forest gump"],
    hindi: "tamasha",
  },
};

const [movie1, movie2] = employee.movie.english;
console.log(movie1, movie2);
