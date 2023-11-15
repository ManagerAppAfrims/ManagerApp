import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { getTeamsThunk } from "../store/reducers/teams";
import AddPlayerOption from "./AddPlayerOption";
import axios from "axios";

function UpdateGameModal({ showUpdateGame, setShowUpdateGame }) {
  const dispatch = useDispatch();
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedGame, setSelectedGame] = useState("");
  const [ourGoals, setOurGoals] = useState(0);
  const [opponentGoals, setOpponentGoals] = useState(0);
  const [result, setResult] = useState("");
  const [completed, setCompleted] = useState(false);
  const teams = useSelector((state) => state.teams);
  console.log({
    selectedTeam,
    selectedGame,
    ourGoals,
    opponentGoals,
    result,
    completed,
  });
  console.log("teams", teams);

  const games = selectedTeam
    ? teams.filter((team) => team.id === selectedTeam)[0].Games
    : [];

  useEffect(() => {
    dispatch(getTeamsThunk());
  }, []);

  function handleClose() {
    setSelectedTeam("");
    setSelectedGame("");
    setShowUpdateGame(false);
  }

  async function handleUpdateGame() {
    try {
      await axios.post(`/api/game/${selectedGame}`, {
        selectedGame,
        ourGoals,
        opponentGoals,
        result,
        completed,
      });
      setShowUpdateGame(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {showUpdateGame ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Update Game</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto flex flex-col gap-4">
                  <div>
                    <select
                      className="w-full border border-gray-400"
                      defaultValue="DEFAULT"
                      onChange={(e) => setSelectedTeam(e.target.value)}
                    >
                      <option value="DEFAULT" disabled>
                        Select Team
                      </option>
                      {teams.map((team) => (
                        <option key={team.id} value={team.id}>
                          {team.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      className="w-full border border-gray-400"
                      defaultValue="DEFAULT"
                      onChange={(e) => setSelectedGame(e.target.value)}
                    >
                      <option value="DEFAULT" disabled>
                        Select Game
                      </option>
                      {selectedTeam &&
                        games.map((game) => (
                          <option
                            key={game.id}
                            value={game.id}
                          >{`${game.date} : vs ${game.opponent}`}</option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <div className="flex flex-col indent-1 my-2">
                      <h3>Our Goals:</h3>
                      <div className="flex items-center justify-around my-2">
                        <button
                          className="bg-black text-white py-2 px-4 rounded-lg"
                          onClick={() => {
                            if (ourGoals > 0) {
                              setOurGoals(ourGoals - 1);
                            }
                          }}
                        >
                          -
                        </button>
                        <h4>{ourGoals}</h4>
                        <button
                          className="bg-black text-white py-2 px-4 rounded-lg"
                          onClick={() => setOurGoals(ourGoals + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col indent-1 my-2">
                      <h3>Opponent Goals:</h3>
                      <div className="flex items-center justify-around my-2">
                        <button
                          className="bg-black text-white py-2 px-4 rounded-lg"
                          onClick={() => {
                            if (opponentGoals > 0) {
                              setOpponentGoals(opponentGoals - 1);
                            }
                          }}
                        >
                          -
                        </button>
                        <h4>{opponentGoals}</h4>
                        <button
                          className="bg-black text-white py-2 px-4 rounded-lg"
                          onClick={() => setOpponentGoals(opponentGoals + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <select
                      className="w-full border border-gray-400"
                      defaultValue="DEFAULT"
                      onChange={(e) => setResult(e.target.value)}
                    >
                      <option value="DEFAULT" disabled>
                        Select Result
                      </option>
                      <option value={"win"}>Win</option>
                      <option value={"tie"}>Tie</option>
                      <option value={"loss"}>Loss</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <label className="mr-2">Game Complete:</label>
                    <input
                      className="h-[20px] w-[20px]"
                      type="checkbox"
                      value={completed}
                      onClick={(e) => setCompleted(!completed)}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClose}
                  >
                    close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    disabled={
                      !(selectedTeam && selectedGame && result && completed)
                    }
                    onClick={handleUpdateGame}
                  >
                    Update Game
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default UpdateGameModal;
