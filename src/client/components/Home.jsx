import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TeamInfo from "./TeamInfo";
import UpcomingEvents from "./UpcomingEvents";
import { getTeamInfoThunk } from "../store/reducers/player";
import MyEnrollments from "./MyEnrollments";

function Home() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.player.playerTeams);
  const me = useSelector((state) => state.auth.me);

  if (!me) {
    return <h3>Login or Register</h3>;
  }

  useEffect(() => {
    dispatch(getTeamInfoThunk(me.id));
  }, []);
  return (
    <div className="flex flex-col items-center min-h-[92vh] bg-[#F7F7F7] w-[95vw]">
      <h2 className="text-3xl my-2">
        WELCOME BACK, {me.firstName.toUpperCase()}
      </h2>
      <hr className="h-[2px] bg-black w-[95vw] my-2" />
      <UpcomingEvents teams={teams} />
      <hr className="h-[2px] bg-black w-[95vw] my-2 mt-8" />
      <MyEnrollments teams={teams} />
    </div>
  );
}

export default Home;
