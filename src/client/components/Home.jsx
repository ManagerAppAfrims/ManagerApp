import React from "react";
import { useSelector } from "react-redux";
import TeamInfo from "./TeamInfo";

function Home() {
  const user = useSelector((state) => state.auth.me) || {};
  return (
    <div className="flex flex-col items-center">
      <TeamInfo />
    </div>
  );
}

export default Home;
