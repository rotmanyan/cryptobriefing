import React from "react";

import ChangePassword from "pages/profile/ChangePassword";
import UploadAvatar from "pages/profile/UploadAvatar";

import "./UserProfileView.scss";

const UserProfileView = ({
  name,
  email,
  avatar,
  country,
  modalReset,
  modalAvatar,
  handleFields,
  updateProfile,
  toggleModalReset,
  toggleModalAvatar
}) => (
  <div className="wrapper-profile">
    <div className="wrapper-profile-avatar">
      <div className="wrapper-avatar">
        {avatar ? (
          <img
            src={`${process.env.REACT_APP_SERVER_ORIGIN}/${avatar}`}
            className="avatar-img"
            alt="avatar"
          />
        ) : (
          <div className="avatar">{email[0]}</div>
        )}
      </div>
      <div className="wrapper-info">
        <div className="avatr-info">Your avatar</div>
        <div className="wrapper-button-update">
          <button className="button-upfate" onClick={toggleModalAvatar}>
            Update
          </button>
        </div>
      </div>
    </div>
    <div className="wrapper-form">
      <div className="wrapper-input">
        <label htmlFor="Username" className="label">
          Username
        </label>
        <input
          type="text"
          value={name}
          name="name"
          id="Username"
          className="input"
          autoComplete="new-password"
          onChange={handleFields}
        />
      </div>

      <div className="wrapper-input">
        <label htmlFor="Country" className="label">
          Country
        </label>
        <input
          type="text"
          id="Country"
          name="country"
          value={country}
          className="input"
          autoComplete="new-password"
          onChange={handleFields}
        />
      </div>

      <div className="wrapper-input">
        <label htmlFor="eMail" className="label">
          eMail
        </label>
        <input
          type="email"
          id="eMail"
          name="email"
          value={email}
          className="input"
          autoComplete="new-password"
          onChange={handleFields}
        />
      </div>

      <div className="wrapper-input">
        <label htmlFor="Password" className="label">
          Password
        </label>
        <input
          type="password"
          id="Password"
          className="input"
          disabled
          placeholder="••••••••••••••••"
          autoComplete="new-password"
        />
      </div>

      <div className="wrapper-buttons">
        <button className="button-change-password" onClick={toggleModalReset}>
          Change Password
        </button>
        <button className="button-delete" onClick={updateProfile}>
          Update profile
        </button>
      </div>
    </div>
    {modalReset && <ChangePassword handleModalReset={toggleModalReset} />}
    {modalAvatar && <UploadAvatar handleModalAvatar={toggleModalAvatar} />}
  </div>
);

export default UserProfileView;
