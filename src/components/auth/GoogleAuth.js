import React from "react";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import { googleAuthSignIn } from "../../actions/auth";

const clientID =
  "125281184698-oujvnvtkgjholu0r2902io7a4fuade8i.apps.googleusercontent.com";

const GoogleAuth = (props) => {
  return (
    <React.Fragment>
      <GoogleLogin
        className="auth-alt-option"
        clientId={clientID}
        buttonText="Sign in with Google"
        onSuccess={(res) => props.googleAuthSignIn(res)} //
        onFailure={(res) => console.log(res)}
      />
    </React.Fragment>
  );
};

export default connect(null, { googleAuthSignIn })(GoogleAuth);
