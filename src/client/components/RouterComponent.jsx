import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginHome from "./LoginHome";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { meThunk } from "../store/reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import AdminDash from "./AdminDash";
import Team from "./Team";
import Player from "./Player";

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
        <Route path="/team/:teamId" element={<Team />} />
      </Routes>
    );
  }

  if (user.id) {
    return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team/:teamId" element={<Team />} />
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
