import axios from "axios";

const GET_PLAYER = "GET_PLAYER";
// const GET_USER = "GET_USER";

const getPlayer = (player) => ({
  type: GET_PLAYER,
  payload: player,
});

// const getUser = (user) => ({
//   type: GET_USER,
//   user,
// });

export const getUserThunk = (playerId) => async (dispatch) => {
  try {
    const { data: player } = await axios.get(`/api/player/${playerId}`);
    return dispatch(getPlayer(player.player));
  } catch (error) {
    console.error(error);
  }
};

// export const getUserThunk = (id) => async (dispatch) => {
//   try {
//     const { data: user } = await axios.get(`/api/users/${id}`);
//     return dispatch(getUser(user));
//   } catch (error) {
//     console.error(error);
//   }
// };

const initialState = {
  playerInfo: {},
  playerTeams: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PLAYER:
      return { ...state, playerInfo: action.payload };
    // case GET_USER:
    //   return { ...state, singleUser: action.user };
    default:
      return state;
  }
}
