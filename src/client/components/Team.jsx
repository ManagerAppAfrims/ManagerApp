import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTeamThunk } from "../store/reducers/team";
import Player from "./Player";
import { TbCircleLetterA } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { convertDay, convertMilitaryTime } from "../utils";
import { AiFillExclamationCircle } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

function Team() {
  const dispatch = useDispatch();
  const { teamId } = useParams();
  const team = useSelector((state) => state.team);

  const finalRoster = useMemo(() => {
    const teamDup = team.UserTeam ? [...team.UserTeam] : [];
    const roster = teamDup.reduce(
      (acc, curr) =>
        (acc = [
          ...acc,
          {
            id: curr.User.id,
            firstName: curr.User.firstName,
            lastName: curr.User.lastName,
            email: curr.User.email,
            phoneNumber: curr.User.phoneNumber,
            isCaptain: curr.isCaptain,
          },
        ]),
      []
    );

    roster.sort(
      (a, b) => a.firstName.charCodeAt(0) - b.firstName.charCodeAt(0)
    );

    return roster;
  }, [team]);

  const remainingGames = useMemo(
    () => team.Games?.filter((game) => !game.completed),
    [team.Games]
  );
  const pastGames = useMemo(
    () => team.Games?.filter((game) => game.completed),
    [team.Games]
  );
  const goalsScored = useMemo(
    () =>
      team.Games?.reduce((acc, curr) => {
        return (acc += curr.ourGoals);
      }, 0),
    [team.Games]
  );

  const gamesWon = useMemo(
    () =>
      team.Games?.reduce((acc, curr) => {
        return (acc += curr.result === "win");
      }, 0),
    [team.Games]
  );
  const gamesTied = useMemo(
    () =>
      team.Games?.reduce((acc, curr) => {
        return (acc += curr.result === "tie");
      }, 0),
    [team.Games]
  );
  const gamesLost = useMemo(
    () =>
      team.Games?.reduce((acc, curr) => {
        return (acc += curr.result === "loss");
      }, 0),
    [team.Games]
  );

  const goalsAgainst = useMemo(
    () =>
      team.Games?.reduce((acc, curr) => {
        return (acc += curr.opponentGoals);
      }, 0),
    [team.Games]
  );

  useEffect(() => {
    dispatch(getTeamThunk(teamId));
  }, []);
  return (
    <div className="flex flex-col items-start w-full px-4">
      <div className="flex justify-center w-full">
        <h2 className="text-2xl my-4">TEAM: {team.name?.toUpperCase()}</h2>
      </div>
      <div className="my-4 w-full">
        <h3 className="text-xl">ROSTER</h3>
        <table className="w-full bg-white">
          <tbody>
            <tr>
              <th className="bg-purple-500 w-full text-xl indent-2 text-white h-[4vh] flex items-center">
                NAME
              </th>
            </tr>
            {team &&
              finalRoster.map((player) => (
                <tr key={player.id}>
                  <td className="border border-b-gray-400 indent-1">
                    <Player player={player} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="my-4">
          <h2 className="text-xl my-2">UPCOMING EVENTS</h2>
          {team.id && remainingGames.length > 0 ? (
            remainingGames.map((game) => (
              <div
                key={uuidv4()}
                className="flex flex-col gap-4 w-full border-b-[2px] border-gray-400 p-3 bg-white shadow-md"
              >
                <div className="flex justify-between">
                  <div>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <TbCircleLetterA />
                        {game.home ? game.opponent : team.name}
                      </div>
                      <h3 className="ml-4">vs</h3>
                      <div className="flex items-center">
                        <AiOutlineHome />
                        {game.home ? team.name : game.opponent}
                      </div>
                    </div>
                    <h3>{`${game.location} ${game.field}`}</h3>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">
                      {convertDay(game.date)}
                    </h3>
                    <h3 className="font-bold text-sm">
                      {convertMilitaryTime(game.time)}
                    </h3>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center bg-white p-2">
              <AiFillExclamationCircle className="mr-1" />
              <h2>No Upcoming Scheduled Events</h2>
            </div>
          )}
        </div>
        <div className="my-4">
          <h2 className="text-xl my-2">PAST EVENTS</h2>
          {team.id && pastGames.length > 0 ? (
            pastGames.map((game) => (
              <div
                key={uuidv4()}
                className="flex flex-col gap-4 w-full border-b-[2px] border-gray-400 p-3 bg-white shadow-md"
              >
                <div className="flex justify-between">
                  <div>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <TbCircleLetterA />
                        {game.home ? game.opponent : team.name}
                      </div>
                      <h3 className="ml-4">vs</h3>
                      <div className="flex items-center">
                        <AiOutlineHome />
                        {game.home ? team.name : game.opponent}
                      </div>
                    </div>
                    <h3>{`${game.location} ${game.field}`}</h3>
                  </div>
                  <div className="flex flex-col justify-around">
                    <div>
                      <h3 className="font-bold text-sm">
                        {convertDay(game.date)}
                      </h3>
                      <h3 className="font-bold text-sm">
                        {convertMilitaryTime(game.time)}
                      </h3>
                    </div>
                    <div className="flex justify-center">
                      <h3 className={game.home ? "" : "font-bold"}>
                        {game.home ? game.opponentGoals : game.ourGoals}
                      </h3>
                      <h3>-</h3>
                      <h3 className={game.home ? "font-bold" : ""}>
                        {game.home ? game.ourGoals : game.opponentGoals}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2>No Past Events</h2>
          )}
        </div>
        <div className="my-4">
          <h3 className="text-xl my-2">STATS</h3>
          <div className="bg-white shadow-md">
            <h3 className="px-1">
              Record: {`${gamesWon}-${gamesTied}-${gamesLost}`}
            </h3>
            <h3 className="bg-[#EFEEF0] px-1">Goals Scored: {goalsScored}</h3>
            <h3 className="px-1">Goals Against: {goalsAgainst}</h3>
            <h3 className="bg-[#EFEEF0] px-1">
              Goals Allowed Per Game:{" "}
              {(goalsAgainst / pastGames?.length).toFixed(2)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
