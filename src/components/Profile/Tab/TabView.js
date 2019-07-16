import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./TabView.scss";

const TabView = ({ url }) => {
  const profileStyle = classnames("navigation__item", {
    "navigation__item--active": url === "/profile"
  });
  const settingStyle = classnames("navigation__item", {
    "navigation__item--active": url === "/profile/settings"
  });

  return (
    <div className="dashboard__navigation">
      <Link to="/profile" className={profileStyle}>
        User profile
      </Link>
      <Link to="/profile/settings" className={settingStyle}>
        Settings
      </Link>
    </div>
  );
};

export default TabView;
