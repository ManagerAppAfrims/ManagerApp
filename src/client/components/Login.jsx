import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUserThunk } from "../store/reducers/auth";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUserThunk({ email, password }));
  };

  return (
    <div className="h-[100vh] bg-[url('src/client/assets/login_registerBG.jpeg')] bg-cover bg-center flex flex-col justify-center items-center">
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
          <Link to="/landing">
            <button>Login</button>
          </Link>
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
