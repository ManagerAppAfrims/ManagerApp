import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserThunk } from "./store/reducers/player";

function App() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  const player = useSelector((state) => state.player);
  console.log(player);

  useEffect(() => {
    async function getPlayer() {
      dispatch(getUserThunk("d05de666-ec44-4c90-82b2-df6bd51d1e3f"));
    }
    getPlayer();
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
