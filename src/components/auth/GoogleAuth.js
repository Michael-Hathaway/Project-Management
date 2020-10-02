import React from "react";
import GoogleLogin from "react-google-login";
import { connect } from "react-redux";
import { googleAuthSignIn } from "../../actions/auth";

const clientID =
  "419789989171-9fbff3l157pmc96f0k2vhtofgemudu47.apps.googleusercontent.com";

const GoogleAuth = (props) => {
  return (
    <React.Fragment>
      <GoogleLogin
        className="auth-alt-option"
        clientId={clientID}
        buttonText={`${props.title} with Google`}
        onSuccess={(res) => props.googleAuthSignIn(res)}
        onFailure={(res) => console.log(res)}
      />
    </React.Fragment>
  );
};

export default connect(null, { googleAuthSignIn })(GoogleAuth);
