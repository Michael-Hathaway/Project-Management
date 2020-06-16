import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import FormField from "./FormField";

class LoginForm extends React.Component {
  handleFormSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleFormSubmit}>
          <FormField fieldType="text" fieldName="username" />
          <FormField fieldType="password" fieldName="password" />
          <div className="button-container">
            <button>Submit</button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const validateUserInput = (formValues) => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "Please enter a username.";
  }

  if (!formValues.password) {
    errors.password = "Please provide a password.";
  }

  return errors;
};

const wrappedForm = reduxForm({
  form: "loginForm",
  validate: validateUserInput,
})(LoginForm);

export default connect(null, {})(wrappedForm);
