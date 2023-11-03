import React from "react";
import { Link } from "react-router-dom";

function LoginHome() {
  return (
    <div className="h-[100vh] bg-[url('src/client/assets/loginBG.jpg')] flex flex-col justify-end items-center bg-center bg-cover">
      <div className="flex flex-col w-4/5 my-4">
        <Link
          to="/login"
          className="bg-white rounded-full py-3 px-6 my-2 flex justify-center items-center"
        >
          <button>Login</button>
        </Link>
        <Link
          to="/register"
          className="bg-black text-white rounded-full py-3 px-6 my-2 flex justify-center items-center"
        >
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginHome;
