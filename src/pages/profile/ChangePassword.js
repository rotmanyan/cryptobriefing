import React, { Component } from "react";
import { connect } from "react-redux";
import { resetPassword } from "middleware/ProfileSettings";

import ChangePasswordView from "components/Profile/ChangePassword/ChangePasswordView";

class ChangePassword extends Component {
  state = {
    current_password: "",
    password: "",
    new_password: "",
    showPassword: false
  };

  _handlePasswordFields = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  _handleShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  };

  _resetPasswordProfile = () => {
    const { resetPassword } = this.props;

    const { current_password, password } = this.state;

    resetPassword({ current_password, password });
  };

  render() {
    const { handleModalReset, error, statusChangePassword } = this.props;

    const {
      current_password,
      password,
      new_password,
      showPassword
    } = this.state;

    const disableSubmit =
      current_password.length > 0 &&
      password.length > 0 &&
      password === new_password;

    return (
      <ChangePasswordView
        password={password}
        error={error}
        statusChangePassword={statusChangePassword}
        new_password={new_password}
        disableSubmit={disableSubmit}
        showPassword={showPassword}
        current_password={current_password}
        handleModalReset={handleModalReset}
        handleShowPassword={this._handleShowPassword}
        handlePasswordFields={this._handlePasswordFields}
        resetPasswordProfile={this._resetPasswordProfile}
      />
    );
  }
}

const mapStateToProps = state => ({
  error: state.profile.errorPassword,
  statusChangePassword: state.profile.statusChangePassword
});

const mapDispatchToProps = {
  resetPassword
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword);
