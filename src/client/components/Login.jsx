import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUserThunk } from "../store/reducers/auth";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const regError = useSelector((state) => state.auth.error);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUserThunk({ email, password }));
  };

  return (
    <div className="h-[100vh] bg-[url('/backgrounds/login_registerBG.jpeg')] bg-cover bg-center flex flex-col justify-center items-center w-[100vw]">
      <div className="h-1/2 flex flex-col justify-center items-center w-4/5">
        <input
          placeholder="email"
          className="w-full rounded-full py-4 indent-4 my-2 shadow-lg text-xl"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="password"
          className="w-full rounded-full py-4 indent-4 my-2 shadow-lg text-xl"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div
          className="bg-black py-4 w-full rounded-full text-white my-2 text-xl shadow-lg flex justify-center items-center"
          onClick={handleLogin}
        >
          <button>Login</button>
        </div>
        <div className="text-center">
          {regError && (
            <h2 className="text-red-500 text-xl my-2">{regError}</h2>
          )}
        </div>
        <span className="text-lg">
          Don't Have An Account?
          <Link
            to="/register"
            className="text-lg font-bold underline underline-offset-4"
          >
            {" "}
            Register
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
