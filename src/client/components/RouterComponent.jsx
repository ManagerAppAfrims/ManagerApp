import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginHome from "./LoginHome";
import Login from "./Login";
import Register from "./Register";
import Landing from "./Landing";
import { meThunk } from "../store/reducers/auth";
import { useDispatch, useSelector } from "react-redux";

function RouterComponent() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.me);

  useEffect(() => {
    dispatch(meThunk());
  }, [user.id]);

  if (user.id) {
    return (
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
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
