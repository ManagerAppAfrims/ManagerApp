import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserThunk } from "./store/reducers/player";
import RouterComponent from "./components/RouterComponent";

function App() {
  return (
    <div>
      <RouterComponent />
    </div>
  );
}

export default App;
