import { initialState } from '../store'

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        firstName: action.payload,
      }

    // this is what we should have returned before

    // {
    //   cart: {
    //     products: [],
    //   },
    //   user: {
    //     firstName: '',
    //   },
    // }

    // this is what we are focusing on right now in userReducer

    //   user: {
    //     firstName: '',
    //   },

    default:
      return state
  }
}

export default userReducer