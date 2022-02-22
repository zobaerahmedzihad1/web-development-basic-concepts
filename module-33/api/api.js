function loadTodo() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// load users
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayUsers(data));
}
function displayUsers(data) {
  const ul = document.getElementById("users");
  for (const users of data) {
    const li = document.createElement("li");
    li.innerText = `Name: ${users.name} And Email: ${users.email}`;
    ul.appendChild(li);
  }
}
// load posts
function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
