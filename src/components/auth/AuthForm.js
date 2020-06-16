import React from "react";

import GoogleAuth from "./GoogleAuth";

const AuthForm = (props) => {
  return (
    <div className="auth-wrapper">
      {props.header}
      <GoogleAuth />
      <hr className="divider" />
      {props.form}
    </div>
  );
};

export default AuthForm;
