import React from "react";

import "../../style/AuthPage.css";
import AuthForm from "./AuthForm";
import AuthFormHeader from "./AuthFormHeader";
import AuthPageHeader from "./AuthPageHeader";
import RegisterForm from "./RegisterForm";
import GoogleAuth from "./GoogleAuth";

const RegisterPage = (props) => {
  return (
    <div className="page-wrapper">
      <div className="image-content"></div>
      <div className="auth-content">
        <AuthPageHeader path="/" label="Sign in">
          <p>Already have an account?</p>
        </AuthPageHeader>
        <AuthForm
          googleAuth={<GoogleAuth title="Register" />}
          header={<AuthFormHeader header="Register" />}
          form={<RegisterForm />}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
