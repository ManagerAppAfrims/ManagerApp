import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getTeamsThunk } from "../store/reducers/teams";
import { addGameNotification, failedAddGameNotification } from "../utils.js";
import axios from "axios";

const fields = [
  "Field 1 IN",
  "Field 2 IN",
  "Field 3 IN",
  "Field 4 IN",
  "Field 1 OUT",
  "Field 2 OUT",
  "Field 3 OUT",
  "Field 4 OUT",
];

function AddGameModal({ showAddGame, setShowAddGame }) {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);
  const [date, setDate] = useState("");
  console.log("date", date);
  const [time, setTime] = useState("");
  console.log("time", time);
  const [location, setLocation] = useState("");
  const [field, setField] = useState("");
  const [home, setHome] = useState();
  const [opponent, setOpponent] = useState("");
  const [teamId, setTeamId] = useState("");

  useEffect(() => {
    dispatch(getTeamsThunk());
  }, []);

  function handleCancel() {
    setDate("");
    setTime("");
    setLocation("");
    setField("");
    setHome();
    setOpponent("");
    setShowAddGame(false);
  }

  async function handleAddGame() {
    try {
      await axios.post("/api/game/", {
        date,
        time,
        location,
        field,
        home,
        teamId,
        opponent,
      });
      addGameNotification();
      setDate("");
      setTime("");
      setOpponent("");
      setHome();
      setShowAddGame(false);
    } catch (error) {
      console.error(error);
      failedAddGameNotification();
      setShowAddGame(false);
    }
  }
  return (
    <>
      {showAddGame ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create Game</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto flex flex-col gap-4">
                  <select
                    onChange={(e) => setTeamId(e.target.value)}
                    className="border border-gray-400"
                    defaultValue={"DEFAULT"}
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
                  <select
                    onChange={(e) => setLocation(e.target.value)}
                    className="border border-gray-400"
                    defaultValue={"DEFAULT"}
                  >
                    <option value="DEFAULT" disabled>
                      Select Location
                    </option>
                    <option value="Afrim's Sports: SP">
                      Afrim's Sports: SP
                    </option>
                    <option value="Afrim's Sports: Colonie">
                      Afrim's Sports: Colonie
                    </option>
                    <option value="Afrim's Sports: Dome-Latham">
                      Afrim's Sports: Dome-Latham
                    </option>
                  </select>
                  <select
                    onChange={(e) => setField(e.target.value)}
                    className="border border-gray-400"
                    defaultValue={"DEFAULT"}
                  >
                    <option value="DEFAULT" disabled>
                      Select Field
                    </option>
                    {fields.map((field) => (
                      <option key={uuidv4()} value={field}>
                        {field}
                      </option>
                    ))}
                  </select>
                  <select
                    onChange={(e) => setHome(e.target.value)}
                    className="border border-gray-400"
                    defaultValue={"DEFAULT"}
                  >
                    <option value="DEFAULT" disabled>
                      Home/Away
                    </option>
                    <option value={true}>Home</option>
                    <option value={false}>Away</option>
                  </select>
                  <input
                    className="border border-gray-400 indent-3 w-full"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <input
                    className="border border-gray-400 indent-3 w-full"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                  <input
                    className="border border-gray-400 indent-3 w-full"
                    placeholder="opponent name"
                    value={opponent}
                    onChange={(e) => setOpponent(e.target.value)}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleCancel()}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    disabled={!(date && time && location && opponent)}
                    onClick={() => handleAddGame()}
                  >
                    Add Game
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

export default AddGameModal;
