import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserThunk } from "./store/reducers/player";
import RouterComponent from "./components/RouterComponent";
import Navbar from "./components/Navbar";

function App() {
  const user = useSelector((state) => state.auth.me);
  return (
    <div className="flex flex-col items-center bg-[#F7F7F7]">
      {user.id && <Navbar />}
      <RouterComponent />
    </div>
  );
}

export default App;
