import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import CreatePlayerModal from "./CreatePlayerModal";
import AddPlayerToTeamModal from "./AddPlayerToTeamModal";
import AddGameModal from "./AddGameModal";
import CreateTeamModal from "./CreateTeamModal";

function AdminDash() {
  const [showCreatePlayer, setShowCreatePlayer] = useState(false);
  const [showAddPlayerToTeam, setShowAddPlayerToTeam] = useState(false);
  const [showAddGame, setShowAddGame] = useState(false);
  const [showCreateTeam, setShowCreateTeam] = useState(false);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-4/5 flex flex-col items-center">
        <h1 className="text-2xl mb-8 mt-4">Admin Dashboard</h1>
        <div className="flex flex-col items-center gap-4 w-full">
          <button
            onClick={() => setShowCreatePlayer(true)}
            className="bg-black py-2 px-4 rounded-full w-full text-xl text-white"
          >
            Create Player
          </button>
          <button
            onClick={() => setShowCreateTeam(true)}
            className="bg-black py-2 px-4 rounded-full w-full text-xl text-white"
          >
            Create Team
          </button>
          <button
            onClick={() => setShowAddGame(true)}
            className="bg-black py-2 px-4 rounded-full w-full text-xl text-white"
          >
            Add Game
          </button>
          <button
            onClick={() => setShowAddPlayerToTeam(true)}
            className="bg-black py-2 px-4 rounded-full w-full text-xl text-white"
          >
            Add Player To Team
          </button>
        </div>
        <CreatePlayerModal
          showCreatePlayer={showCreatePlayer}
          setShowCreatePlayer={setShowCreatePlayer}
        />
        <AddPlayerToTeamModal
          showAddPlayerToTeam={showAddPlayerToTeam}
          setShowAddPlayerToTeam={setShowAddPlayerToTeam}
        />
        <AddGameModal
          showAddGame={showAddGame}
          setShowAddGame={setShowAddGame}
        />
        <CreateTeamModal
          showCreateTeam={showCreateTeam}
          setShowCreateTeam={setShowCreateTeam}
        />
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </div>
  );
}

export default AdminDash;
