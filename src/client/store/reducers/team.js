import axios from "axios";

const GET_TEAM = "GET_TEAM";
// const GET_USER = "GET_USER";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://soccersavvy.onrender.com"
    : "http://localhost:3000";

const getTeam = (team) => ({
  type: GET_TEAM,
  payload: team,
});

export const getTeamThunk = (teamId) => async (dispatch) => {
  try {
    const { data: team } = await axios.get(`${BASE_URL}/api/team/${teamId}`);
    return dispatch(getTeam(team));
  } catch (error) {
    console.error(error);
  }
};

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TEAM:
      return action.payload;
    default:
      return state;
  }
}
