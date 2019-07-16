import React, { Component } from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { selectSetings, datacolumnSettings } from "data/columnSettings/selectors";
import {
  selectColumnsSettings,
  deleteSelectColumnsSettings,
  changePositionColumsSettings
} from "data/columnSettings/actions";

import ColumnSettings from "./ColumnSettings";

class SelectSettings extends Component {
  state = {
    items: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.dataSelectSetings
    });
  }

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  onDragEnd = result => {
    const { changePositionColumsSettings } = this.props;

    if (!result.destination) {
      return;
    }

    if (result.destination.index !== 0) {
      const items = this.reorder(
        this.state.items,
        result.source.index,
        result.destination.index
      );

      this.setState({
        items
      });

      changePositionColumsSettings(items);
    }
  };

  render() {
    const { deleteSelectColumnsSettings } = this.props;
    const { items } = this.state;

    return (
      <div className="columnSettings__items">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <ColumnSettings
            data={items}
            deleteSelectColumnsSettings={deleteSelectColumnsSettings}
          />
        </DragDropContext>
        {/* <div className="columnSettings__item columnSettings__item--empty">
          <span>8</span>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: datacolumnSettings(state),
  dataSelectSetings: selectSetings(state)
});

const mapDispatchToProps = {
  selectColumnsSettings,
  deleteSelectColumnsSettings,
  changePositionColumsSettings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectSettings);
