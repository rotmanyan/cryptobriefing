import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";
import close from "assets/icons/close-inv.svg";
import React from "react";


export const UploadImage = ({setEditorRef, image, disable, onSaveAvatar, handleDrop, handleModalImage}) => <div className="wrapper-modal-upload-avatar">
  <div className="innder-wrapper">
    <div className="inner-upload-avatar">
      <div className="modal-upload-avatar">
        <div className="title">Crop image</div>

        <AvatarEditor
          ref={setEditorRef}
          image={image}
          width={150}
          height={150}

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
            Save image
          </button>

          <Dropzone onDrop={handleDrop} disableClick>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <button className="button-cansel">
                    Upload new image
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
          onClick={handleModalImage}
        />
      </div>
    </div>
  </div>
</div>