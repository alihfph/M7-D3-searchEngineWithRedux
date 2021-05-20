export const addToCartAction = (jobDetails) => ({
  type: "ADD_ITEM_TO_CART", // mandatory property
  payload: jobDetails, // not mandatory property, for additional information
});

export const addToCartActionWithThunk = (jobDetails) => {
  return (dispatch, getState) => {
    // put here your logic!!
    console.log("I'm dispatching this out of a function!", getState());
    // fetches, api calls, etc.
    if (true) {
      dispatch({
        type: "ADD_ITEM_TO_CART", // mandatory property
        payload: jobDetails, // not mandatory property, for additional information
      });
    }
  };
};

export const setUserNameAction = (username) => ({
  type: "SET_USERNAME",
  payload: username,
});

export const removeFromCartAction = (index) => ({
  type: "REMOVE_ITEM_FROM_CART",
  payload: index,
});

export const getjobsAction = ({ description, location } = {}) => {
  return async (dispatch, getState) => {
    if (true) {
      console.log("fetching the jobs...");

      try {
        const endpoint =
          description && location
            ? `https://strive-proxy.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`
            : `https://strive-proxy.herokuapp.com/https://jobs.github.com/positions.json}`;
        let resp = await fetch(endpoint);
        if (resp.ok) {
          let result = await resp.json();
          dispatch({
            type: "GET_JOBS",
            payload: result,
          });
        } else {
          console.log("error");
          setTimeout(() => {
            dispatch({
              type: "GET_JOBS_TOGGLE_ERROR",
            });
            setTimeout(() => {
              dispatch({
                type: "GET_JOBS_TOGGLE_ERROR",
              });
            }, 5000);
          }, 1000);
        }
      } catch (error) {
        console.log(error);
        setTimeout(() => {
          dispatch({
            type: "GET_JOBS_TOGGLE_ERROR",
          });
        }, 1000);
      }
    }
  };
};
