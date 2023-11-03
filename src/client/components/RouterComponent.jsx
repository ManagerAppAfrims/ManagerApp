import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginHome from "./LoginHome";
import Login from "./Login";
import Register from "./Register";
import Landing from "./Landing";

function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<LoginHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
}

export default RouterComponent;
