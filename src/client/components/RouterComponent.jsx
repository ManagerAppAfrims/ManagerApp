import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginHome from "./LoginHome";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { meThunk } from "../store/reducers/auth";
import { useDispatch, useSelector } from "react-redux";

function RouterComponent() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.me);

  useEffect(() => {
    dispatch(meThunk());
  }, [user.id]);

  if (user.id && user.isAdmin) {
    return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Home />} />
      </Routes>
    );
  }

  if (user.id) {
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>;
  }

  return (
    <Routes>
      <Route index element={<LoginHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default RouterComponent;
