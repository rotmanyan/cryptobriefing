import React, { Component } from "react";
import { connect } from "react-redux";

import TabView from "components/Profile/Tab/TabView";

import { getProfileSettings, getProfile } from "middleware/ProfileSettings";

class ProfileTab extends Component {
  componentDidMount() {
    const { getProfileSettings, getProfile } = this.props;

    getProfile();
    getProfileSettings();
  }

  render() {
    const { url } = this.props;
    return <TabView url={url} />;
  }
}

const mapDispatchToProps = { getProfileSettings, getProfile };

export default connect(
  null,
  mapDispatchToProps
)(ProfileTab);
