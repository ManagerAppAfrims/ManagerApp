import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="h-[100vh] bg-[url('src/client/assets/login_registerBG.jpeg')] bg-cover bg-center flex flex-col justify-center items-center">
      <div className="h-1/2 flex flex-col justify-center items-center w-4/5">
        <input
          placeholder="email"
          className="w-full rounded-full py-4 indent-4 my-2 shadow-lg text-xl"
        />
        <input
          placeholder="password"
          className="w-full rounded-full py-4 indent-4 my-2 shadow-lg text-xl"
        />
        <button className="bg-black py-4 w-full rounded-full text-white my-2 text-xl shadow-lg">
          Register
        </button>
        <span className="text-lg">
          Already Have An Account?
          <Link
            to="/login"
            className="text-lg font-bold underline underline-offset-4"
          >
            {" "}
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
