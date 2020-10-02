import React from "react";

import "../../style/AuthPage.css";
import AuthForm from "./AuthForm";
import AuthFormHeader from "./AuthFormHeader";
import LoginForm from "./LoginForm";
import AuthPageHeader from "./AuthPageHeader";
import GoogleAuth from "./GoogleAuth";

const LoginPage = () => {
  return (
    <div className="page-wrapper">
      <div className="image-content"></div>
      <div className="auth-content">
        <AuthPageHeader path="/register" label="Register">
          <p>Don't have an account?</p>
        </AuthPageHeader>
        <AuthForm
          header={<AuthFormHeader header="Sign in" />}
          googleAuth={<GoogleAuth title="Login" />}
          form={<LoginForm />}
        />
      </div>
    </div>
  );
};

export default LoginPage;
