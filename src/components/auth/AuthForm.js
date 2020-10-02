import React from "react";

const AuthForm = (props) => {
  return (
    <div className="auth-wrapper">
      {props.header}
      <div className="auth-alt">{props.googleAuth}</div>
      <hr className="divider" />
      {props.form}
    </div>
  );
};

export default AuthForm;
