import axios from "axios";

const GET_TEAMS = "GET_TEAMS";
// const GET_USER = "GET_USER";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://soccersavvy.onrender.com"
    : "http://localhost:3000";

const getTeams = (teams) => ({
  type: GET_TEAMS,
  payload: teams,
});

export const getTeamsThunk = () => async (dispatch) => {
  try {
    const { data: teams } = await axios.get(`${BASE_URL}/api/team/all`);
    return dispatch(getTeams(teams));
  } catch (error) {
    console.error(error);
  }
};

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TEAMS:
      return action.payload;
    default:
      return state;
  }
}
