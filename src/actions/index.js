
export const addToCartAction = (jobDetails) => ({
  // we need to pass an action here
  type: 'ADD_TO_CART',
  payload: jobDetails,
})

export const removeFromCartAction = (index) => ({
  // we need to pass an action here
  type: 'REMOVE_FROM_CART',
  payload: index,
})

export const setUserNameAction = (username) => ({
  type: 'SET_USERNAME',
  payload: username,
})