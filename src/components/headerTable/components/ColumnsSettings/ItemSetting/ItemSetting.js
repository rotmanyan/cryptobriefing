import React, { Component } from "react";

class ItemSetting extends Component {
  getHighlightedText = (text, higlight) => {
    let parts = text.split(new RegExp(`(${higlight})`, "gi"));
    return (
      <span>
        {parts.map((part, i) => (
          <span
            key={i}
            className={
              part.toLowerCase() === higlight.toLowerCase()
                ? "filter-letters"
                : ""
            }
          >
            {part}
          </span>
        ))}
      </span>
    );
  };

  render() {
    const { data, selectColumnsSettings, search } = this.props;

    return (
      <>
        {data.map(item =>
          !item.check ? (
            <div
              key={item.column_type}
              className="columnSettings__fieldRow columnSettings__fieldRow--active"
              onClick={() => selectColumnsSettings(item)}
            >
              <span>{this.getHighlightedText(item.column_name, search)}</span>
            </div>
          ) : (
            <div
              key={item.column_type}
              className="columnSettings__fieldRow columnSettings__fieldRow--select"
              onClick={() => selectColumnsSettings(item)}
            >
              <span>{item.column_name}</span>
            </div>
          )
        )}
      </>
    );
  }
}

export default ItemSetting;
