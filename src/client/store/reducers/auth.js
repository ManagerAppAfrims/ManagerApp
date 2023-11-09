import axios from "axios";

const BASE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const GETME = "GETME";

const login = (userObj) => ({
  type: LOGIN,
  payload: userObj,
});

const getMe = (userObj) => ({
  type: GETME,
  payload: userObj,
});

const logout = () => ({
  type: LOGOUT,
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

      return dispatch(login(userObj.user));
    } catch (error) {
      console.error(error);
    }
  };

export const meThunk = () => async (dispatch) => {
  const token = window.sessionStorage.getItem("TOKEN");
  if (token) {
    const { data } = await axios.get("/auth/me", {
      headers: {
        authorization: token,
      },
    });
    return dispatch(getMe(data));
  }
};

export const logoutThunk = () => async (dispatch) => {
  window.sessionStorage.removeItem("TOKEN");
  return dispatch(logout());
};

const initialState = {
  me: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { me: action.payload };
    case GETME:
      return { me: action.payload };
    case LOGOUT:
      return { me: {} };
    default:
      return state;
  }
}
