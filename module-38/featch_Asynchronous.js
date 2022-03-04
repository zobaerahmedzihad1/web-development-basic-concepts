console.log("hello 1");

// Recognize fetch as an Asynchronous activity
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(data => console.log(data));

console.log("hello 2");
setTimeout(()=>{
     console.log("I am work after 5 second letet.");
}, 5000);

console.log("hello 3");