import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutThunk } from "../store/reducers/auth";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.me);

  function handleLogout() {
    dispatch(logoutThunk());
  }

  return (
    <div className="bg-blue-500 h-[10vh] flex justify-between items-center p-4">
      <h1 className="text-2xl ml-4">Welcome {user.firstName}</h1>
      <div className="flex gap-6">
        <div onClick={handleLogout}>
          <Link to="/">
            <button className="py-2 px-6 text-white bg-black rounded-full">
              Logout
            </button>
          </Link>
        </div>
        <Link to="/admin">
          <button className="py-2 px-6 text-white bg-black rounded-full">
            Admin Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
