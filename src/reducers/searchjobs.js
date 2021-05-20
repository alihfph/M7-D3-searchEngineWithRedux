import { initialState } from "../store";

const searchjobsReducer = (state = initialState.searchjobs, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return {
        ...state,
        result: action.payload,
        error: false,
      };
    case "GET_JOBS_TOGGLE_ERROR":
      return {
        ...state,
        error: !state.error,
      };
    default:
      return state;
  }
};

export default searchjobsReducer;
