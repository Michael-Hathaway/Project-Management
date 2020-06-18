import { DEFAULT_SIGN_IN, SIGN_OUT, GOOGLE_AUTH_SIGN_IN } from "./types";
import history from "../history";

//
// SIGN IN WITH GOOGLE AUTH
//
export const googleAuthSignIn = (authObject) => async (dispatch) => {
  const { email, googleId, givenName, familyName } = authObject.profileObj;

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
