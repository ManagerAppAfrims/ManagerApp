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
      <Link to="/home">
        <div className="text-5xl">🏠</div>
      </Link>
      <div>
        <h1 className="text-2xl ml-4">Welcome</h1>
        <h1 className="text-2xl ml-4">{user.firstName}</h1>
      </div>
      <div className="flex gap-2">
        <Link to="/admin">
          <button className="py-2 px-6 text-white bg-black rounded-full">
            Admin
          </button>
        </Link>
        <div onClick={handleLogout}>
          <Link to="/">
            <button className="py-2 px-6 text-white bg-black rounded-full">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
