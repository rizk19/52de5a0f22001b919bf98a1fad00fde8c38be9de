import {
  SET_DATE,
  SET_EAT_TIME,
  SET_LOCATION_TRUE,
  SET_LOCATION_FALSE,
  SET_CART,
  SET_DETAIL_LOCATION,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        dateIndex: action.payload.index,
        dateTime: action.payload.data,
      };
    case SET_EAT_TIME:
      return {
        ...state,
        eatTime: action.payload,
      };
    case SET_LOCATION_TRUE:
      console.log(state.location);
      return {
        ...state,
        location: true,
      };
    case SET_LOCATION_FALSE:
      console.log(state.location);
      return {
        ...state,
        location: false,
      };
    case SET_DETAIL_LOCATION:
      return {
        ...state,
        location: false,
        locationItem: action.payload,
      };
    case SET_CART:
      return {
        ...state,
        cart: true,
        cartItem: {
          quantity: state.cartItem.quantity + action.payload.quantity,
          price: state.cartItem.price + action.payload.price,
        },
      };
    default:
      return state;
  }
};
