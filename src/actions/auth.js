import { SIGN_IN, SIGN_OUT } from "./types";

export const userSignIn = (formValues) => async (dispath) => {
  // api request

  return {
    type: SIGN_IN,
    payload: "",
  };
};
