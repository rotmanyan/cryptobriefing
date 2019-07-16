import React, { Component } from "react";
import { connect } from "react-redux";
import close from "assets/icons/close-inv.svg";
import search from "assets/icons/ic-search-inverse.svg";

import Columns from "./Colums/Colums";
import SelectSettings from "./SelectSettings/SelectSettings";

import { clearSelectSettings } from "data/columnSettings/actions";

import "./columnsSettings.scss";

class ColumnsSettings extends Component {
  state = {
    searchValue: ""
  };

  handleSettings = e => {
    const { openSettings, clearSelectSettings } = this.props;
    clearSelectSettings();
    openSettings(e);
  };

  searchFn = e => this.setState({ searchValue: e.target.value });

  render() {
    const { searchValue } = this.state;
    const { openSettings } = this.props;

    return (
      <div className="columnSettings">
        <div
          className="columnSettings__subWrapper"
          onClick={this.handleSettings}
        />
        <div className="columnSettings__wrapper">
          <section className="columnSettings__header">
            <h2 className="columnSettings__title">Columns settings</h2>
            <img
              className="columnSettings__close"
              src={close}
              onClick={this.handleSettings}
              alt="close"
            />
            <p className="columnSettings__description">
              You can choose only up to 8 columns to display.
            </p>
            <SelectSettings />
          </section>
          <section className="columnSettings__body">
            <div className="columnSettings__searchItem">
              <img
                className="columnSettings__search"
                src={search}
                alt="search"
              />
              <input
                className="columnSettings__searchInput"
                value={searchValue}
                onChange={this.searchFn}
                placeholder="Search item"
                type="text"
              />
            </div>
          </section>
          <Columns search={searchValue} openSettings={openSettings} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  clearSelectSettings
};

export default connect(
  null,
  mapDispatchToProps
)(ColumnsSettings);
