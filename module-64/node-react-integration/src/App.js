import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/add" element={<AddUser />} />
      </Routes>
    </>
  );
};

export default App;
