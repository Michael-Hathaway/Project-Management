import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import "../style/App.css";

import history from "../history";
import PrivateRoute from "./auth/PrivateRoute";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import AccountHome from "./AccountHome";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <PrivateRoute path="/home" component={AccountHome} exact />
      </Switch>
    </Router>
  );
};

export default App;
