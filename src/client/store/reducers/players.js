import axios from "axios";

const GET_PLAYERS = "GET_PLAYERS";
// const GET_USER = "GET_USER";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://soccersavvy.onrender.com"
    : "http://localhost:3000";

const getPlayers = (players) => ({
  type: GET_PLAYERS,
  payload: players,
});

export const getPlayersThunk = () => async (dispatch) => {
  try {
    const { data: players } = await axios.get(`${BASE_URL}/api/player/all`);
    return dispatch(getPlayers(players));
  } catch (error) {
    console.error(error);
  }
};

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS:
      return action.payload;
    default:
      return state;
  }
}
