import React, { useEffect, useState } from "react";

const AddUser = () => {
  const [users, setUsers] = useState([]);

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
      .then((data) => console(data));
    alert("user created.");
    e.target.reset();
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
      <h3>User Name : {users.name} </h3>
      <h2>User Id : {users.insertedId} </h2>
      
    </div>
  );
};

export default AddUser;
