import {
  DEFAULT_SIGN_IN,
  SIGN_OUT,
  GOOGLE_AUTH_SIGN_IN,
} from "../actions/types";

const INITITAL_STATE = {
  user: null,
  isSignedIn: false,
};

export default (state = INITITAL_STATE, action = {}) => {
  switch (action.type) {
    case DEFAULT_SIGN_IN:
      return { ...state, isSignedIn: true, user: action.payload };
    case GOOGLE_AUTH_SIGN_IN:
      return { ...state, isSignedIn: true, user: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, user: null };
    default:
      return state;
  }
};
