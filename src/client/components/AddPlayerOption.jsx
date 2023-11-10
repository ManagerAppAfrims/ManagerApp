import React, { useState } from "react";
import axios from "axios";
import {
  addUserToTeamNotification,
  failedAddUserToTeamNotification,
} from "../utils";

function AddPlayerOption({ player, teams }) {
  const [selectedTeam, setSelectedTeam] = useState(null);

  async function handleAssignTeam(playerId, team, firstName) {
    const arr = team.split("_");
    const teamId = arr[0];
    const teamName = arr[1];
    try {
      await axios.post("/api/userteam/", { userId: playerId, teamId });
      addUserToTeamNotification(firstName, teamName);
    } catch (error) {
      console.error(error);
      failedAddUserToTeamNotification(firstName, teamName);
    }
  }
  return (
    <div key={player.id} className="flex justify-between w-full px-3">
      <h2>
        {player.firstName} {player.lastName}
      </h2>
      <div className="flex justify-between items-center w-[55%] gap-1">
        <select
          className="w-2/3"
          onChange={(e) => setSelectedTeam(e.target.value)}
        >
          <option selected disabled>
            Select Team
          </option>
          {teams.map((team) => (
            <option value={`${team.id}_${team.name}`} key={team.id}>
              {team.name}
            </option>
          ))}
        </select>
        <button
          onClick={() =>
            handleAssignTeam(player.id, selectedTeam, player.firstName)
          }
          disabled={!selectedTeam}
          className={`text-xl ${selectedTeam ? "" : "grayscale"}`}
        >
          ✅
        </button>
      </div>
    </div>
  );
}

export default AddPlayerOption;
