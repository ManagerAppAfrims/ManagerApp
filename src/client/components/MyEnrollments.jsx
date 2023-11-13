import React from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineHome } from "react-icons/ai";
import { TbCircleLetterA } from "react-icons/tb";
import { convertMilitaryTime, convertDay } from "../utils";
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaShieldHalved } from "react-icons/fa6";
import { AiFillExclamationCircle } from "react-icons/ai";

function MyEnrollments({ teams }) {
  return (
    <div className="w-full">
      <h3 className="text-2xl my-4">MY ENROLLMENTS</h3>
      {teams.length > 0 &&
        teams.map((team) => (
          <div
            key={uuidv4()}
            className="flex flex-col gap-4 w-full border-b-[2px] border-gray-400 bg-white shadow-md mb-6"
          >
            <div className="w-full p-3">
              <h3>{team.Team.name.toUpperCase()}</h3>
              <h3>2023-2024 Winter 1 (Nov-Dec) Adult Leagues</h3>
            </div>
            <div className="bg-[#EFEEF0] p-3">
              <h3 className="font-bold">NEXT EVENT:</h3>
              {team.Team.Games[0] ? (
                <>
                  <div className="flex items-center">
                    <BsFillCalendar2EventFill className="mr-2" />
                    <h3 className="mr-2">
                      {convertDay(team.Team.Games[0].date)}
                    </h3>
                    <h3>{convertMilitaryTime(team.Team.Games[0].time)}</h3>
                  </div>
                  <div className="flex items-center">
                    <MdLocationOn className="mr-2" />
                    <h3 className="mr-2">{team.Team.Games[0].location}</h3>
                    <h3>{team.Team.Games[0].field}</h3>
                  </div>
                  <div className="flex items-center">
                    <FaShieldHalved className="mr-2" />
                    <TbCircleLetterA />
                    {team.Team.Games[0].home ? (
                      <h3>{team.Team.Games[0].opponent} vs</h3>
                    ) : (
                      <h3>{team.Team.name} vs</h3>
                    )}
                    <AiOutlineHome className="ml-1" />
                    {team.Team.Games[0].home ? (
                      <h3>{team.Team.name}</h3>
                    ) : (
                      <h3>{team.Team.Games[0].opponent}</h3>
                    )}
                    <h3></h3>
                  </div>{" "}
                </>
              ) : (
                <div className="flex">
                  <AiFillExclamationCircle className="mr-1" />
                  <h3>No Upcoming Registered Events</h3>
                </div>
              )}
            </div>{" "}
          </div>
        ))}
    </div>
  );
}

export default MyEnrollments;