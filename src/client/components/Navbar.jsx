import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutThunk } from "../store/reducers/auth";

function Navbar() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutThunk());
  }

  return (
    <div className="bg-blue-500 h-[10vh] flex justify-end items-center p-4">
      <div onClick={handleLogout}>
        <Link to="/">
          <button className="py-2 px-6 text-white bg-black rounded-full">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
