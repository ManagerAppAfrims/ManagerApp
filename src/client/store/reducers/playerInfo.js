import axios from "axios";

const GET_PLAYER_INFO = "GET_PLAYER_INFO";
// const GET_USER = "GET_USER";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://soccersavvy.onrender.com"
    : "http://localhost:3000";

const getPlayerInfo = (player) => ({
  type: GET_PLAYER_INFO,
  payload: player,
});

export const getPlayerInfoThunk = (playerId) => async (dispatch) => {
  try {
    const { data: player } = await axios.get(
      `${BASE_URL}/api/player/${playerId}`
    );
    console.log("player from thunk", player);
    return dispatch(
      getPlayerInfo({
        firstName: player.firstName,
        lastName: player.lastName,
        email: player.email,
        phoneNumber: player.phoneNumber,
      })
    );
  } catch (error) {
    console.error(error);
  }
};

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLAYER_INFO:
      return action.payload;
    default:
      return state;
  }
}
