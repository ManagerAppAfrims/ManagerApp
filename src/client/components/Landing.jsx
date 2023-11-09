import React from "react";
import { useSelector } from "react-redux";

function Landing() {
  const user = useSelector((state) => state.auth.credentials.user) || {};
  console.log(user);
  return <div>Welcome</div>;
}

export default Landing;
