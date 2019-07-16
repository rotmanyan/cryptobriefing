import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ProfileTab from "./ProfileTab";
import Settings from "./Settings";
import UserProfile from "./UserProfile";

import { tokenUser } from "data/signUser/selectors"

class Profile extends Component {
  render() {
    const {
      location: { pathname }
    } = this.props;

    if (!this.props.token && !localStorage.getItem("token")) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <>
        <div className="wrapper--black">
          <div className="container">
            <h1 className="dashboard__title">Profile</h1>
            <ProfileTab url={pathname} />
          </div>
        </div>
        <div className="registration__wrapper">
          <div className="container">
            {pathname === "/profile" ? <UserProfile /> : <Settings />}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  token: tokenUser(state)
});

export default connect(mapStateToProps)(Profile);
