import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import playersReducer from "./reducers/players";
import authReducer from "./reducers/auth";
import teamReducer from "./reducers/team";
import teamsReducer from "./reducers/teams";
import playerInfoReducer from "./reducers/playerInfo";
import playerReducer from "./reducers/player";

const reducer = combineReducers({
  player: playerReducer,
  auth: authReducer,
  players: playersReducer,
  team: teamReducer,
  teams: teamsReducer,
  player: playerReducer,
  playerInfo: playerInfoReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
