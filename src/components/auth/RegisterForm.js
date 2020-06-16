import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import FormField from "./FormField";

class RegisterForm extends React.Component {
  handleFormSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleFormSubmit}>
          <FormField fieldType="text" fieldName="username" />
          <FormField fieldType="email" fieldName="email" />
          <FormField fieldType="password" fieldName="password" />
          <FormField fieldType="password" fieldName="confirm password" />
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

  if (formValues.email && !formValues.email.includes("@")) {
    errors.email = "Please provide a valid email address.";
  }

  if (formValues.password !== formValues.confirmpassword) {
    errors.confirmpassword = "Passwords must match!";
  }

  return errors;
};

const wrappedForm = reduxForm({
  form: "registerForm",
  validate: validateUserInput,
})(RegisterForm);

export default connect(null, {})(wrappedForm);
