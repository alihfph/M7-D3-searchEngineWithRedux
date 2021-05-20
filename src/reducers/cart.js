import { initialState } from "../store";

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        jobs: [
          ...state.jobs.slice(0, action.payload),
          ...state.jobs.slice(action.payload + 1),
        ],
        //   products: state.products.filter((p, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
