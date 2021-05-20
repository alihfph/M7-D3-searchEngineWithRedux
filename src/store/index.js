import { createStore , combineReducers, compose, applyMiddleware } from "redux";

import userReducer from "../reducers/user";
import cartReducer from "../reducers/cart";
import searchjobsReducer from "../reducers/searchjobs";
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  cart: {
    jobs: [],
  },
  user: {
    firstName: "",
  },
  searchjobs: {
    result: [],
    error: false,
  },
};

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  searchjobs: searchjobsReducer
})

export default function configureStore() {
  return createStore(bigReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
}
