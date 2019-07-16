import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import SettingItem from "./SettingItem";

class ColumnSettings extends Component {
  render() {
    const { data, deleteSelectColumnsSettings } = this.props;

    return (
      <Droppable droppableId="droppable" direction="horizontal">
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="wrapper-colum"
          >
            {data.map((item, index) => (
              <SettingItem
                item={item}
                index={index}
                key={item.column_type}
                deleteSelectColumnsSettings={deleteSelectColumnsSettings}
              >
                {provided.placeholder}
              </SettingItem>
            ))}
          </div>
        )}
      </Droppable>
    );
  }
}

export default ColumnSettings;
