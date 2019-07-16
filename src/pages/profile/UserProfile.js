import React, { Component } from "react";
import { connect } from "react-redux";
import UserProfileView from "components/Profile/UserProfile/UserProfileView";

import {
  dataUsername,
  dataEmail,
  dataCountry,
  dataAvatar,
  statusModalReset
} from "data/profile/selectors";

import { handleModalReset } from "data/profile/actions";

import { updateProfile } from "middleware/ProfileSettings";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      country: "",

      modalAvatar: false,
      ...props
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.email !== nextProps.email) {
      this.setState({
        name: nextProps.name,
        email: nextProps.email,
        country: nextProps.country
      });
    }
  }

  _handleFields = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  _toggleModalReset = () => {
    const { handleModalReset } = this.props;
    handleModalReset();
  };

  _toggleModalAvatar = () => {
    this.setState({
      modalAvatar: !this.state.modalAvatar
    });
  };

  _updateProfile = () => {
    const { updateProfile } = this.props;

    const { name, email, country } = this.state;

    updateProfile({ name, email, country });
  };

  render() {
    const { name, email, country, modalAvatar } = this.state;

    const { avatar, modalReset } = this.props;

    return (
      <UserProfileView
        name={name}
        email={email}
        avatar={avatar}
        country={country}
        modalReset={modalReset}
        modalAvatar={modalAvatar}
        handleFields={this._handleFields}
        updateProfile={this._updateProfile}
        toggleModalReset={this._toggleModalReset}
        toggleModalAvatar={this._toggleModalAvatar}
      />
    );
  }
}

const mapStateToProps = state => ({
  name: dataUsername(state),
  email: dataEmail(state),
  avatar: dataAvatar(state),
  country: dataCountry(state),
  modalReset: statusModalReset(state)
});

const mapDispatchToProps = { updateProfile, handleModalReset };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
