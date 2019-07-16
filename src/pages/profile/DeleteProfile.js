import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteProfile } from "middleware/ProfileSettings";

import DeleteProfileView from "components/Profile/DeleteProfile/DeleteProfileView";

class DeleteProfile extends Component {
  _handleDeleteProfile = () => {
    const { deleteProfile } = this.props;

    deleteProfile();
  };

  render() {
    const { handleModalDelete } = this.props;

    return (
      <DeleteProfileView
        handleModalDelete={handleModalDelete}
        _handleDeleteProfile={this._handleDeleteProfile}
      />
    );
  }
}

const mapDispatchToProps = {
  deleteProfile
};

export default connect(
  null,
  mapDispatchToProps
)(DeleteProfile);
