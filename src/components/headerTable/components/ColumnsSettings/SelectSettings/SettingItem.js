import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import close from "assets/icons/ic-close.svg";

class SettingItem extends Component {
  render() {
    const { item, deleteSelectColumnsSettings } = this.props;

    return (
      <Draggable
        index={this.props.index}
        draggableId={this.props.item.column_type}
        isDragDisabled={item.column_type === "token"}
      >
        {provided => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {item.column_type === "token" ? (
              <div className="columnSettings__item columnSettings__item--noActive columnSettings__item-tokenName">
                <span>{item.column_name}</span>
              </div>
            ) : (
              <div className="columnSettings__item columnSettings__item--draggable">
                <span>{item.column_name}</span>
                <img
                  src={close}
                  alt={close}
                  className="columnSettings__itemClose"
                  onClick={() => deleteSelectColumnsSettings(item.column_type)}
                />
              </div>
            )}
          </div>
        )}
      </Draggable>
    );
  }
}

export default SettingItem;
