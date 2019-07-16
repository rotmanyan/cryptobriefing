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


class UserAddNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      country: "",
      role: 'user',


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

  _toggleModalReset = () => {
    const {handleModalReset} = this.props;
    handleModalReset();
  };

  _toggleModalAvatar = () => {
    this.setState({
      modalAvatar: !this.state.modalAvatar
    });
  };

  _updateProfile = () => {
    const {updateProfile} = this.props;

    const {name, email, country} = this.state;

    updateProfile({name, email, country});
  };

  handleRoleChange = e => this.setState({role: e.target.textContent.toLowerCase()})

  render() {
    const {name, email, country, modalAvatar, role} = this.state;

    const {avatar} = this.props;
    return <UserModification name={name}
                             email={email}
                             avatar={avatar}
                             country={country}
                             modalAvatar={modalAvatar}
                             handleFields={this._handleFields}
                             updateProfile={this._updateProfile}
                             toggleModalReset={this._toggleModalReset}
                             toggleModalAvatar={this._toggleModalAvatar}
                             handleRoleChange={this.handleRoleChange}
                             role={role}
                             isNewUser={true}/>
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
)(UserAddNew);