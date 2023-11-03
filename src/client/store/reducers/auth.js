import axios from "axios";

const BASE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

const LOGIN = "LOGIN";

const login = (userObj) => ({
  type: LOGIN,
  payload: userObj,
});

export const loginUserThunk =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const { data: userObj } = await axios.post(`${BASE_URL}/auth/login`, {
        email: email,
        password: password,
      });

      window.sessionStorage.setItem("TOKEN", userObj.token);

      return dispatch(login(userObj));
    } catch (error) {
      console.error(error);
    }
  };

const initialState = {
  credentials: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { credentials: action.payload };
    default:
      return state;
  }
}
