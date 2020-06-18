import React from "react";
import { Field } from "redux-form";

class FormField extends React.Component {
  renderFormError = ({ error, touched }) => {
    if (touched && error) {
      return <div className="error-message">{error}</div>;
    }
  };

  renderFormField = ({ input, meta }) => {
    return (
      <div className="form-field">
        <label>{this.props.fieldName}</label>
        <input
          {...input}
          type={this.props.fieldType}
          placeholder={this.props.fielName}
          required
        />
        {this.renderFormError(meta)}
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Field
          name={this.props.fieldName.replace(/\s/g, "")}
          component={this.renderFormField}
        />
      </React.Fragment>
    );
  }
}

export default FormField;
