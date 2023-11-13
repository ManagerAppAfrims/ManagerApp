import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getTeamThunk } from "../store/reducers/team";
import Player from "./Player";

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
          },
        ]),
      []
    );

    roster.sort(
      (a, b) => a.firstName.charCodeAt(0) - b.firstName.charCodeAt(0)
    );

    return roster;
  }, [team]);

  useEffect(() => {
    dispatch(getTeamThunk(teamId));
  }, []);
  return (
    <div className="flex flex-col items-start w-full px-4">
      <div className="flex justify-center w-full">
        <h2 className="text-2xl my-4">{team.name}</h2>
      </div>
      <div className="my-4 w-full">
        <h3 className="text-xl">ROSTER</h3>
        <table className="w-full">
          <tbody>
            <tr>
              <th className="bg-purple-500 w-full text-xl indent-2 text-white h-[4vh] flex items-center">
                NAME
              </th>
            </tr>
            {team &&
              finalRoster.map((player) => (
                <tr key={player.id}>
                  <td className="p-2 border border-b-gray-400">
                    <Player player={player} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Team;
