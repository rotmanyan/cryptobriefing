import React from "react";
import close from "assets/icons/close-inv.svg";

import "./DeleteProfileView.scss";

const DeleteProfileView = ({ handleModalDelete, _handleDeleteProfile }) => (
  <div className="wrapper-modal-delete-acount">
    <div className="innder-wrapper">
      <div className="inner-delete-acount">
        <div className="modal-delete-acount">
          <div className="title">Delete Account</div>
          <div className="under-title">Your account will be deleted.</div>

          <div className="remove-info">Remove all my personal information</div>

          <div className="wrapper-buttons">
            <button className="button-submit" onClick={_handleDeleteProfile}>
              Yes, delete
            </button>
            <button className="button-cansel" onClick={handleModalDelete}>
              Cancel
            </button>
          </div>
          <img
            className="close"
            src={close}
            alt="close"
            onClick={handleModalDelete}
          />
        </div>
      </div>
    </div>
  </div>
);

export default DeleteProfileView;
