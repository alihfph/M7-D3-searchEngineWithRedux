import { initialState } from "../store";
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          jobs: state.cart.jobs.concat(action.payload), // the book
          //   products: state.cart.products.push(action.payload),
          // WHAT IS IMMUTABILITY?
          // YOU CANNOT USE METHODS THAT ALTERS OR MUTATES THE STATE
          // YOU CANNOT USE I.E. PUSH OR SPLICE
        },
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          jobs: state.cart.jobs.filter((jobDetails, i) => i !== action.payload),
        },
      };
    case "SET_USERNAME":
      return {
        ...state,
        user: {
          ...state.user,
          firstName: action.payload,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
