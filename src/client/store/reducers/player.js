import axios from "axios";

const GET_PLAYER = "GET_PLAYER";
const GET_TEAM_INFO = "GET_TEAM_INFO";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://soccersavvy.onrender.com"
    : "http://localhost:3000";

const getPlayer = (player) => ({
  type: GET_PLAYER,
  payload: player,
});

const getTeamInfo = (teams) => ({
  type: GET_TEAM_INFO,
  payload: teams,
});

export const getUserThunk = (playerId) => async (dispatch) => {
  try {
    const { data: player } = await axios.get(
      `${BASE_URL}/api/player/${playerId}`
    );
    dispatch(getPlayer(player));
  } catch (error) {
    console.error(error);
  }
};

export const createUserThunk = (playerInfo) => async (dispatch) => {
  try {
    const { data: player } = await axios.post(
      `${BASE_URL}/auth/register`,
      playerInfo
    );
  } catch (error) {
    console.error(error);
  }
};

export const getTeamInfoThunk = (playerId) => async (dispatch) => {
  console.log("playerId from team thunk", playerId);
  try {
    const { data: teams } = await axios.get(
      `${BASE_URL}/api/player/teams/${playerId}`
    );
    // console.log("teams from team thunk", teams);
    dispatch(getTeamInfo(teams));
  } catch (error) {
    console.error(error);
  }
};

const initialState = {
  playerInfo: {},
  playerTeams: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLAYER:
      return { ...state, playerInfo: action.payload };
    case GET_TEAM_INFO:
      return { ...state, playerTeams: action.payload };
    default:
      return state;
  }
}
