import React from "react";
import { convertMilitaryTime } from "../utils";

function ScheduledGame({ game }) {
  return (
    <div key={game.id} className="flex gap-3">
      <h3>⚽️</h3>
      <div>
        <h3 className="text-xl">Opponent: {game.opponent}</h3>
        <h3 className="text-xl">Location: {game.location}</h3>
        <h3 className="text-lg">Date: {game.date}</h3>
        <h3 className="text-lg">Time: {convertMilitaryTime(game.time)}</h3>
      </div>
    </div>
  );
}

export default ScheduledGame;
