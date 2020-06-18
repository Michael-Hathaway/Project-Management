import React from "react";
import { connect } from "react-redux";

import { userSignOut } from "../actions/auth";

const SignOutButton = (props) => {
  return (
    <div className="button-container">
      <button onClick={props.userSignOut}>Sign Out</button>
    </div>
  );
};

export default connect(null, { userSignOut })(SignOutButton);
