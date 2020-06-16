import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITITAL_STATE = {
  username: null,
  isSignedIn: false,
};

export default (state = INITITAL_STATE, action = {}) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, username: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, username: null };
    default:
      return state;
  }
};
