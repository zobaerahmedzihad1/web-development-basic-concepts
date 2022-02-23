const loadRandomUser = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => displayUser(data));
};
// calling loadRandomUser function
loadRandomUser();

const displayUser = (users) => {
  const allUsers = users.results;

  const usersDiv = document.getElementById("random-user");

  for (const user of allUsers) {
    const p = document.createElement("p");
    p.classList.add("user");
    p.innerText = `This is my user name ${user.name.title} ${user.name.first} ${user.name.last}`;
    usersDiv.appendChild(p);
  }
};
