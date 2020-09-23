import { SET_DATE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        dateIndex: action.payload.index,
        dateTime: action.payload.data,
      };

    default:
      return state;
  }
};
