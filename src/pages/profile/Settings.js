import React, { Component } from "react";
import { connect } from "react-redux";
import SettingsView from "components/Profile/Settings/SettingsView";

import { updateProfileSettings } from "middleware/ProfileSettings";
import { dataSettings, statusDeleteAccount } from "data/profile/selectors";

class Settings extends Component {
  state = {
    openModalDelete: false
  };

  componentWillUpdate(nextProps) {
    if (this.props.deleteAccount !== nextProps.deleteAccount) {
      this.setState({ openModalDelete: !this.state.openModalDelete });
    }
  }

  handleChange = (checked, event, id) => {
    const { updateProfileSettings } = this.props;

    updateProfileSettings({ [id]: checked });
  };

  handleModalDelete = () => {
    this.setState({ openModalDelete: !this.state.openModalDelete });
  };

  render() {
    const { openModalDelete } = this.state;
    const { settings } = this.props;

    return (
      <SettingsView
        settings={settings}
        openModalDelete={openModalDelete}
        handleChange={this.handleChange}
        handleModalDelete={this.handleModalDelete}
      />
    );
  }
}

const mapStateToProps = state => ({
  settings: dataSettings(state),
  deleteAccount: statusDeleteAccount(state)
});

const mapDispatchToProps = { updateProfileSettings };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
