import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = (props) => {
  if (!props.isSignedIn) {
    return <Redirect to="/" />;
  }

  return (
    <React.Fragment>
      <Route path={props.path} component={props.component} exact />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {})(PrivateRoute);
