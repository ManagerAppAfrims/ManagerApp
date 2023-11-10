import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
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
    <div className="flex flex-col items-center" r>
      <div className="w-4/5 flex flex-col items-center">
        <h1 className="text-2xl mb-8 mt-4">Admin Dashboard</h1>
        <div className="flex flex-col items-center gap-4 w-full">
          <button
            onClick={() => setShowCreatePlayer(true)}
            className="bg-blue-500 py-2 px-4 rounded-full w-full text-xl"
          >
            Create Player
          </button>
          <button
            onClick={() => setShowCreateTeam(true)}
            className="bg-blue-500 py-2 px-4 rounded-full w-full text-xl"
          >
            Create Team
          </button>
          <button
            onClick={() => setShowAddGame(true)}
            className="bg-blue-500 py-2 px-4 rounded-full w-full text-xl"
          >
            Add Game
          </button>
          <button
            onClick={() => setShowAddPlayerToTeam(true)}
            className="bg-blue-500 py-2 px-4 rounded-full w-full text-xl"
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
