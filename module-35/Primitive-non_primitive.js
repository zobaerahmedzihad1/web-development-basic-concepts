// javascript have 7 types of data type.
/*
primitive data type
1) Number 
2) string
3) boolean
4) undefined
5) null
6) Symbol
Non-primitive data type
7) Object
*/

let a = "hello";
let b = a;
console.log("a =", a, "b = ", b);
a = "hi";
console.log("a =", a, "b =", b);

const x = { job: "I am a teacher" };
const y = x;
console.log("x =", x, "y =", y);

x.job = "Now I am a web developer ";

console.log("x =", x, "y =", y);
