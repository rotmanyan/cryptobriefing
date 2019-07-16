import React, {Component} from 'react';

import {
  dataUsername,
  dataEmail,
  dataCountry,
  dataAvatar,
  statusModalReset
} from "data/profile/selectors";

import {handleModalReset} from "data/profile/actions";

import {updateProfile} from "middleware/ProfileSettings";

import UserModification from "../UserModification";
import connect from "react-redux/es/connect/connect";


class UserEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      country: "",
      resetPasswordModalShow: false,

      modalAvatar: false,
      ...props
    };
  }

  _handleFields = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };

  // _toggleModalReset = () => {
  //   const {handleModalReset} = this.props;
  //   handleModalReset();
  // };

  _toggleModalAvatar = () => {
    this.setState({
      modalAvatar: !this.state.modalAvatar
    });
  };

  toggleModalResetPassword = () => this.setState(({resetPasswordModalShow}) => ({resetPasswordModalShow: !resetPasswordModalShow}))

  _updateProfile = () => {
    const {updateProfile} = this.props;

    const {name, email, country} = this.state;

    updateProfile({name, email, country});
  };

  render() {
    const {name, email, country, modalAvatar, resetPasswordModalShow} = this.state;

    const {avatar} = this.props;
    return <UserModification name={name}
                             email={email}
                             avatar={avatar}
                             country={country}
                             resetPasswordModalShow={resetPasswordModalShow}
                             modalAvatar={modalAvatar}
                             handleFields={this._handleFields}
                             updateProfile={this._updateProfile}
                             toggleModalReset={this.toggleModalResetPassword}
                             toggleModalAvatar={this._toggleModalAvatar}
    />
  }
}

const mapStateToProps = state => ({
  name: dataUsername(state),
  email: dataEmail(state),
  avatar: dataAvatar(state),
  country: dataCountry(state),
  modalReset: statusModalReset(state)
});

const mapDispatchToProps = {updateProfile, handleModalReset};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEdit);