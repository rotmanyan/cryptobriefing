import React, { Component } from "react";
import { connect } from "react-redux";

import UploadAvatarView from "components/Profile/UploadAvatar/UploadAvatarView";
import { updateProfilePhoto } from "middleware/ProfileSettings";

class UploadAvatar extends Component {
  state = {
    image: null,
    disable: true
  };

  onSaveAvatar = () => {
    const { updateProfilePhoto, handleModalAvatar } = this.props;
    if (this.editor) {
      const canvas = this.editor.getImage();
      const canvasScaled = this.editor.getImageScaledToCanvas().toDataURL();

      if (canvas.width !== undefined) {
        updateProfilePhoto(canvasScaled);
        handleModalAvatar();
      }
    }
  };

  handleDrop = dropped => {
    this.setState({ image: dropped[0], disable: false });
  };

  setEditorRef = editor => (this.editor = editor);

  render() {
    const { handleModalAvatar } = this.props;

    const { image, disable } = this.state;

    return (
      <UploadAvatarView
        image={image}
        disable={disable}
        handleModalAvatar={handleModalAvatar}
        onSaveAvatar={this.onSaveAvatar}
        setEditorRef={this.setEditorRef}
        handleDrop={this.handleDrop}
      />
    );
  }
}

const mapDispatchToProps = { updateProfilePhoto };

export default connect(
  null,
  mapDispatchToProps
)(UploadAvatar);
