import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayerInfoThunk } from "../store/reducers/playerInfo";

function Player({ player }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalOpen(true)}>
        <h2 className="my-4 w-full text-blue-700">
          {`${player.firstName} ${player.lastName} ${
            player.isCaptain ? "⭐️" : ""
          }`}
        </h2>
      </button>
      <>
        {modalOpen ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">CONTACT INFO</h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto flex flex-col gap-4">
                    <div>
                      <h2 className="font-bold text-lg">NAME</h2>
                      <h2>{`${player.firstName} ${player.lastName}`}</h2>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">EMAIL</h2>
                      <h2>{player.email}</h2>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg">PHONE</h2>
                      <h2>{`(${player.phoneNumber.slice(
                        0,
                        3
                      )}) ${player.phoneNumber.slice(
                        3,
                        6
                      )}-${player.phoneNumber.slice(6)}`}</h2>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </div>
  );
}

export default Player;
