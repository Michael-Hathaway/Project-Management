import {
  DEFAULT_SIGN_IN,
  SIGN_OUT,
  GOOGLE_AUTH_SIGN_IN,
  DEFAULT_REGISTER_ATTEMPT,
  GOOGLE_REGISTER_ATTEMPT,
} from "./types";
import history from "../history";

//
// ATTEMPT TO REGISTER A NEW ACCOUNT -- DEFUALT
//
export const defaultRegistration = (formValues) => async (dispatch) => {
  // send request to backend with form values for new user
  const { username, email, password } = formValues;

  dispatch({
    type: DEFAULT_REGISTER_ATTEMPT,
    payload: {
      username,
      email,
      password,
    },
  });
};

//
// ATTEMPT TO REGISTER A NEW ACCOUNT -- Google
//
export const googleRegistration = (authObject) => async (dispatch) => {
  const { email, googleId, givenName, familyName } = authObject.profileObj;

  // need to decide if I should handle query to backend here
  // or in reducer

  dispatch({
    type: GOOGLE_REGISTER_ATTEMPT,
    payload: {
      email,
      googleId,
      givenName,
      familyName,
    },
  });
};

//
// SIGN IN WITH GOOGLE AUTH
//
export const googleAuthSignIn = (authObject) => async (dispatch) => {
  const { email, googleId, givenName, familyName } = authObject.profileObj;

  // need to decide if I should handle query to backend here
  // or in reducer

  dispatch({
    type: GOOGLE_AUTH_SIGN_IN,
    payload: {
      firstName: givenName,
      lastName: familyName,
      email,
      clientId: googleId,
    },
  });

  history.push("/home");
};

//
// DEFAULT USER SIGN
//
export const userSignIn = (formValues) => async (dispatch) => {
  // api request to confirm user

  dispatch({
    type: DEFAULT_SIGN_IN,
    payload: formValues.username,
  });

  history.push("/home");
};

//
// USER SIGN OUT
//
export const userSignOut = () => {
  return {
    type: SIGN_OUT,
  };
};
