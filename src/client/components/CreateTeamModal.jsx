import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addTeamNotification, failedCreateTeamNotification } from "../utils";

function CreateTeamModal({ showCreateTeam, setShowCreateTeam }) {
  const dispatch = useDispatch();
  const [teamName, setTeamName] = useState("");

  function handleCancel() {
    setTeamName("");
    setShowCreateTeam(false);
  }

  async function handleCreateTeam() {
    try {
      await axios.post("/api/team/", { name: teamName });
      setTeamName("");
      addTeamNotification(teamName);
      setShowCreateTeam(false);
    } catch (error) {
      console.error(error);
      failedCreateTeamNotification();
    }
  }
  return (
    <>
      {showCreateTeam ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create Team</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto flex flex-col gap-4">
                  <input
                    className="border border-gray-400 indent-3 w-full"
                    placeholder="team name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
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
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleCreateTeam()}
                  >
                    Create Team
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

export default CreateTeamModal;
