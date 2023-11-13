import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutThunk } from "../store/reducers/auth";
import { AiFillHome } from "react-icons/ai";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.me);

  function handleLogout() {
    dispatch(logoutThunk());
  }

  return (
    <div className="h-[8vh] flex justify-between items-center p-4 border-b-[1px] border-gray-400 w-full">
      <Link to="/home">
        <AiFillHome />
      </Link>

      <div className="flex gap-2">
        {user.isAdmin && (
          <Link to="/admin">
            <button className="py-2 px-6 text-white bg-black rounded-full">
              Admin
            </button>
          </Link>
        )}

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
