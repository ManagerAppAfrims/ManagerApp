import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getTeamInfoThunk } from "../store/reducers/player";
import { convertMilitaryTime } from "../utils";
import ScheduledGame from "./ScheduledGame";

function TeamInfo() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.player.playerTeams);
  const me = useSelector((state) => state.auth.me);

  useEffect(() => {
    dispatch(getTeamInfoThunk(me.id));
  }, []);
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-3xl my-4">Your Teams Schedules</h1>
      <div className="w-full flex flex-col items-center gap-4 overflow-y-auto">
        {teams.map((team) => (
          <div
            key={uuidv4()}
            className="flex flex-col gap-4 w-4/5 border border-gray-400 p-3 overflow-y-auto max-h-[35vh] min-h-[20vh]"
          >
            <h2 className="text-2xl">{team.Team.name}</h2>
            <div className="flex flex-col gap-6">
              {team.Team.Games.map((game) => (
                <ScheduledGame game={game} key={game.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamInfo;
