import React, { Component } from "react";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
import close from "assets/icons/close-inv.svg";

import "./UploadAvatarView.scss";

class UploadAvatarView extends Component {
  render() {
    const {
      image,
      disable,
      handleModalAvatar,
      onSaveAvatar,
      setEditorRef,
      handleDrop
    } = this.props;
    return (
      <div className="wrapper-modal-upload-avatar">
        <div className="innder-wrapper">
          <div className="inner-upload-avatar">
            <div className="modal-upload-avatar">
              <div className="title">Crop avatar</div>

              <AvatarEditor
                ref={setEditorRef}
                image={image}
                width={240}
                height={240}
                borderRadius={120}
                color={[0, 0, 0, 0.3]}
                border={[105, 70]}
                scale={2}
                className='modal-upload-avatar-editor'
              />

              <div className="wrapper-buttons modalProfile__bottom">
                <button
                  disabled={disable}
                  className="button-submit"
                  onClick={onSaveAvatar}
                >
                  Save avatar
                </button>

                <Dropzone onDrop={handleDrop} disableClick>
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <button className="button-cansel">
                          Upload new photo
                        </button>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
              <img
                className="close"
                src={close}
                alt="close"
                onClick={handleModalAvatar}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadAvatarView;
