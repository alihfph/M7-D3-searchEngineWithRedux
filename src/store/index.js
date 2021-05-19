import { createStore } from "redux";
import mainReducer from "../reducers";
export const initialState = {
  cart: {
    jobs: [],
  },
  user: {
    firstName: "",
  },
};

export default createStore(
  mainReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
