import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import close from "assets/icons/close-inv.svg";

class PresetsModal extends Component {
  handleClickOutside = evt => {
    const { handleModal } = this.props;
    if (evt.isTrusted) {
      handleModal(false);
    }
  };

  render() {
    const {
      onSelect,
      inputValue,
      deleteCustom,
      customPresets,
      defaultPresets,
      statusNewPreset,
      valueNewPreset,
      handleValueNewPreset,
      handleSaveNewPreset
    } = this.props;

    return (
      <div className="wrapper-presets">
        <div className="basicDropDown__listBox">
          <div className="title">Presets</div>

          {statusNewPreset && (
            <ul className="basicDropDown__list">
              <li title="Geography" className="basicDropDown__item save-preset">
                <input
                  type="text"
                  placeholder="Basic *"
                  className="name-preset"
                  value={valueNewPreset}
                  onChange={handleValueNewPreset}
                />
                {valueNewPreset.length > 0 && (
                  <input
                    type="button"
                    value="Save"
                    className="save-pereset"
                    onClick={handleSaveNewPreset}
                  />
                )}
              </li>
            </ul>
          )}

          {customPresets.length > 0 && (
            <ul className="basicDropDown__list">
              {customPresets.map(item => (
                <li
                  key={item.id}
                  title="Geography"
                  className={
                    inputValue.id === item.id
                      ? "basicDropDown__item active"
                      : "basicDropDown__item"
                  }
                  onClick={() => onSelect(item)}
                >
                  {item.name}
                  <img
                    className="close"
                    src={close}
                    alt="close"
                    onClick={e => deleteCustom(e, item.id)}
                  />
                </li>
              ))}
            </ul>
          )}
          {defaultPresets.length > 0 && (
            <ul className="basicDropDown__list basicDropDown__list--second">
              {defaultPresets.map(item => (
                <li
                  key={item.id}
                  title="Geography"
                  className={
                    inputValue.id === item.id
                      ? "basicDropDown__item active"
                      : "basicDropDown__item"
                  }
                  onClick={() => onSelect(item)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default onClickOutside(PresetsModal);
