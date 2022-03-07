const id = [7, 9, 3, 6, 5, 2];

const personDetails = {
  name: "zihad",
  age: 19,
  from: "Bangladesh",
  movies: ["forest gump", "tamasha", "extraction"],
};

const aboutMe = `Hello my name is ${personDetails.name}.
 I am from ${personDetails.from}. I am ${personDetails.age} years old.
 My favourite movie is ${personDetails.movies[1]}
 `;

console.log(aboutMe);
