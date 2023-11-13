import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginHome from "./LoginHome";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { meThunk } from "../store/reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import AdminDash from "./AdminDash";

function RouterComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.me);

  useEffect(() => {
    dispatch(meThunk());
    navigate("/");
  }, [user.id]);

  if (user.id && user.isAdmin) {
    return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<AdminDash />} />
      </Routes>
    );
  }

  if (user.id) {
    console.log("i have Id");
    return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    );
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
