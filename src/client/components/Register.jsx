import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUserThunk } from "../store/reducers/auth";

function Register() {
  const regError = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  function handleRegister() {
    if (password !== confirmPassword) {
      setError("Passwords Do Not Match!");
      return;
    }
    dispatch(registerUserThunk({ email, password, firstName, lastName }));
  }

  return (
    <div className="h-[100vh] bg-[url('src/client/assets/login_registerBG.jpeg')] bg-cover bg-center flex flex-col justify-center items-center">
      <div className="h-1/2 flex flex-col justify-center items-center w-4/5">
        <input
          placeholder="email"
          className="w-full rounded-full py-4 indent-4 my-2 shadow-lg text-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          className="w-full rounded-full py-4 indent-4 my-2 shadow-lg text-xl"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="confirm password"
          className="w-full rounded-full py-4 indent-4 my-2 shadow-lg text-xl"
          value={confirmPassword}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input
          placeholder="first name"
          className="w-full rounded-full py-4 indent-4 my-2 shadow-lg text-xl"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder="last name"
          className="w-full rounded-full py-4 indent-4 my-2 shadow-lg text-xl"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <div
          className="bg-black py-4 w-full rounded-full text-white my-2 text-xl shadow-lg flex justify-center items-center"
          onClick={handleRegister}
        >
          <button>Register</button>
        </div>
        <div className="text-center">
          {error && <h2 className="text-red-500 text-xl my-2">{error}</h2>}
          {regError && (
            <h2 className="text-red-500 text-xl my-2">{regError}</h2>
          )}
        </div>
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
