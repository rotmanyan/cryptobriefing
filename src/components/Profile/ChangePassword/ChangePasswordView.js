import React from "react";
import close from "assets/icons/close-inv.svg";
import eye from "assets/icons/invisible-inv.svg";
import "./ChangePasswordView.scss";

const ChangePasswordView = ({
  password,
  error,
  statusChangePassword,
  new_password,
  disableSubmit,
  current_password,
  showPassword,
  handleModalReset,
  handleShowPassword,
  handlePasswordFields,
  resetPasswordProfile
}) => {
  return (
    <div className="wrapper-modal-change-password">
      <div className="innder-wrapper">
        <div className="inner-change-password">
          <div className="modal-change-password">
            <div className="title"> Change password</div>
            <div className="wrapper-input-password">
              <input
                type="password"
                name="current_password"
                value={current_password}
                placeholder="Old password"
                className="password-input"
                autoComplete="user-password"
                onChange={handlePasswordFields}
              />
            </div>
            <div className="wrapper-input-password">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                placeholder="New password"
                className="password-input"
                autoComplete="new-password"
                onChange={handlePasswordFields}
              />
              <img
                className="eye"
                src={eye}
                alt="eye"
                onClick={handleShowPassword}
              />
            </div>
            <div className="wrapper-input-password">
              <input
                type={showPassword ? "text" : "password"}
                name="new_password"
                value={new_password}
                placeholder="Confirm new password"
                className="password-input"
                autoComplete="new-password"
                onChange={handlePasswordFields}
              />
              <div className="wrapper-error">
                {!statusChangePassword && (
                  <span className="error">{error}</span>
                )}
              </div>
            </div>

            <div className="wrapper-buttons modalProfile__bottom">
              <button
                className="button-submit"
                disabled={!disableSubmit}
                onClick={resetPasswordProfile}
              >
                Submit
              </button>
              <button className="button-cansel" onClick={handleModalReset}>
                Cancel
              </button>
            </div>
            <img
              className="close"
              src={close}
              alt="close"
              onClick={handleModalReset}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordView;
