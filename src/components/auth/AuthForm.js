import React from "react";

import GoogleAuth from "./GoogleAuth";

const AuthForm = (props) => {
  return (
    <div className="auth-wrapper">
      {props.header}
      <div className="auth-alt">
        <GoogleAuth />
      </div>
      <hr className="divider" />
      {props.form}
    </div>
  );
};

export default AuthForm;
