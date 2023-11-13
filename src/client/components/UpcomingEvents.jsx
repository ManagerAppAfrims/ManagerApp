import React from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineHome } from "react-icons/ai";
import { TbCircleLetterA } from "react-icons/tb";
import { convertMilitaryTime, convertDay, gameCount } from "../utils";
function UpcomingEvents({ teams }) {
  const gamesCount = gameCount(teams);

  return (
    <div className="w-full">
      <h3 className="text-2xl my-4">MY UPCOMING EVENTS</h3>
      {teams.length > 0 &&
        teams.map((team) => {
          if (team.Team.Games.length > 0) {
            return (
              <div
                key={uuidv4()}
                className="flex flex-col gap-4 w-full border-b-[2px] border-gray-400 p-3 bg-white shadow-md"
              >
                <div className="flex justify-between">
                  <div>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <TbCircleLetterA />
                        {team.Team.Games[0].home
                          ? team.Team.Games[0].opponent
                          : team.Team.name}
                      </div>
                      <h3 className="ml-4">vs</h3>
                      <div className="flex items-center">
                        <AiOutlineHome />
                        {team.Team.Games[0].home
                          ? team.Team.name
                          : team.Team.Games[0].opponent}
                      </div>
                    </div>
                    <h3>{team.Team.Games[0].location}</h3>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">
                      {convertDay(team.Team.Games[0].date)}
                    </h3>
                    <h3 className="font-bold text-sm">
                      {convertMilitaryTime(team.Team.Games[0].time)}
                    </h3>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}

export default UpcomingEvents;
