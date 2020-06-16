import React from "react";
import { Link } from "react-router-dom";

const AuthPageHeader = (props) => {
  return (
    <div className="auth-header">
      <div className="content">
        {props.children}
        <Link to={props.path}>{props.label}</Link>
      </div>
    </div>
  );
};

export default AuthPageHeader;
