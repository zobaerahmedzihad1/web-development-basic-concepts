import React from "react";

const AddUser = () => {
  const handleUserInformation = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;

    const user = { name, email };

// send data to server (backend)
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Please add a new user.</h3>
      <form onSubmit={handleUserInformation}>
        <input type="text" placeholder="Name" name="name" required />
        <br />
        <input type="text" placeholder="Email" name="email" required />
        <br />
        <input type="submit" value="Add user" />
      </form>
    </div>
  );
};

export default AddUser;
