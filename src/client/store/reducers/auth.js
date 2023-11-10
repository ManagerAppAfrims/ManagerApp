import axios from "axios";
import history from "../../history";

const BASE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const LOGOUT = "LOGOUT";
const GETME = "GETME";
const ERROR = "ERROR";

const login = (userObj) => ({
  type: LOGIN,
  payload: userObj,
});

const register = (userObj) => ({
  type: REGISTER,
  payload: userObj,
});

const getMe = (userObj) => ({
  type: GETME,
  payload: userObj,
});

const logout = () => ({
  type: LOGOUT,
});

const error = (errorMsg) => ({
  type: ERROR,
  payload: errorMsg,
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

      if (!userObj.message) {
        dispatch(login(userObj.user));
        history.push("/home");
      } else {
        console.error(error);
        dispatch(error(userObj.message));
      }
    } catch (error) {
      console.error(error);
      dispatch(error("Incorrect email or password"));
    }
  };

export const registerUserThunk =
  ({ email, password, firstName, lastName }) =>
  async (dispatch) => {
    try {
      const { data: userObj } = await axios.post(`${BASE_URL}/auth/register`, {
        email,
        password,
        firstName,
        lastName,
      });

      window.sessionStorage.setItem("TOKEN", userObj.token);

      if (!userObj.message) {
        dispatch(register(userObj.user));
        history.push("/home");
      } else {
        console.error(error);
        dispatch(error(userObj.message));
      }
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
    dispatch(getMe(data));
  }
};

export const logoutThunk = () => async (dispatch) => {
  window.sessionStorage.removeItem("TOKEN");
  dispatch(logout());
};

const initialState = {
  me: {},
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, me: action.payload };
    case REGISTER:
      return { ...state, me: action.payload };
    case GETME:
      return { ...state, me: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case LOGOUT:
      return { ...state, me: {} };
    default:
      return state;
  }
}
