import React from "react";
import AuthForm from "./AuthForm";

const AuthFormHeader = (props) => {
  return (
    <div className="auth-form-header">
      <h1>{props.header}</h1>
    </div>
  );
};

export default AuthFormHeader;
