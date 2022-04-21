import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you want to delete ?");
    if (proceed) {
      console.log("Deleted.");
    }
  };

  return (
    <div>
      <h2>Home component.</h2>
      <h3>Total User : {user.length} </h3>
      {user.map((use) => (
        <li key={use._id}>
          <button onClick={() => handleDelete(use._id)}>Delete</button>
          {use.name}{" "}
        </li>
      ))}
    </div>
  );
};

export default Home;
