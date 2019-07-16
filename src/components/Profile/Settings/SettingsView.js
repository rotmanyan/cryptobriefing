import React from "react";
import Switch from "react-switch";
import DeleteProfile from "pages/profile/DeleteProfile";

import "./SettingsView.scss";

const SettingsView = ({
  handleChange,
  handleModalDelete,
  openModalDelete,
  settings: {
    desktop_notifications,
    mobile_notifications,
    newsletter,
    camera,
    cookies
  }
}) => {
  return (
    <>
      <div className="wrapper-profile-settings">
        <div className="block-settings">
          <div className="title-block-settings">Account type</div>

          <div className="item-settings">
            <div className="name-settings">Premium</div>
          </div>
        </div>

        <div className="block-settings">
          <div className="title-block-settings">Notifications</div>

          <div className="item-settings line-bottom">
            <div className="name-settings">Desktop notifications</div>
            <div className="wrapper-switch">
              <Switch
                width={38}
                height={20}
                checked={desktop_notifications}
                onChange={handleChange}
                checkedIcon={false}
                uncheckedIcon={false}
                offColor="#ff415f"
                onColor="#02c88a"
                id="desktop_notifications"
              />
            </div>
          </div>

          <div className="item-settings line-bottom">
            <div className="name-settings">Mobile Notifications</div>
            <div className="wrapper-switch">
              <Switch
                width={38}
                height={20}
                checked={mobile_notifications}
                onChange={handleChange}
                checkedIcon={false}
                uncheckedIcon={false}
                offColor="#ff415f"
                onColor="#02c88a"
                id="mobile_notifications"
              />
            </div>
          </div>

          <div className="item-settings">
            <div className="name-settings">Newsletter</div>
            <div className="wrapper-switch">
              <Switch
                width={38}
                height={20}
                checked={newsletter}
                onChange={handleChange}
                checkedIcon={false}
                uncheckedIcon={false}
                offColor="#ff415f"
                onColor="#02c88a"
                id="newsletter"
              />
            </div>
          </div>
        </div>

        <div className="block-settings">
          <div className="title-block-settings">Permissions</div>

          <div className="item-settings line-bottom">
            <div className="name-settings">Camera</div>
            <div className="wrapper-switch">
              <Switch
                width={38}
                height={20}
                checked={camera}
                onChange={handleChange}
                checkedIcon={false}
                uncheckedIcon={false}
                offColor="#ff415f"
                onColor="#02c88a"
                id="camera"
              />
            </div>
          </div>

          <div className="item-settings">
            <div className="name-settings">Data/ Cookies</div>
            <div className="wrapper-switch">
              <Switch
                width={38}
                height={20}
                checked={cookies}
                onChange={handleChange}
                checkedIcon={false}
                uncheckedIcon={false}
                offColor="#ff415f"
                onColor="#02c88a"
                id="cookies"
              />
            </div>
          </div>
        </div>

        <div className="wrapper-button">
          <button className="button-delete" onClick={handleModalDelete}>
            Delete account
          </button>
        </div>
      </div>
      {openModalDelete && (
        <DeleteProfile handleModalDelete={handleModalDelete} />
      )}
    </>
  );
};

export default SettingsView;
