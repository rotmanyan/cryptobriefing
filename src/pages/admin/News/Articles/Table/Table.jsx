import React, {Component} from 'react';
import {TableView} from "./TableView";
import onClickOutside from "react-onclickoutside";


class Table extends Component {
  state = {
    showActionField: false,
    selectedId: null,
    data: [
      {
        id: 'qweklwqenqjneq',
        title: 'Hands-On Preview of Samsung’s Galaxy S10 Phone Reveals New Crypto Details',
        time: 'Mar 13 • 12:31',
        source: 'CryptoBriefing',
        status: 'Published',
        hide: false
      },
      {
        id: 'sfmnvsnjks',
        title: 'Hands-On Preview of Samsung’s Galaxy S10 Phone Reveals New Crypto Details',
        time: 'Mar 13 • 12:31',
        source: 'CryptoBriefing',
        status: 'Published',
        hide: false
      },
      {
        id: 'kewjfibwfwd',
        title: 'Hands-On Preview of Samsung’s Galaxy S10 Phone Reveals New Crypto Details',
        time: 'Mar 13 • 12:31',
        source: 'CryptoBriefing',
        status: 'Published',
        hide: true
      }

    ]
  }

  handleClickOutside = () => this.setState({showActionField: false});

  handleShowActionField = id => {
    this.setState({showActionField: !this.state.showActionField, selectedId: id})
  };

  toggleProperty = (arr, key, propName) => {
    let indexOfDeleted = arr.findIndex((item) => item.id === key),
      oldItem = arr[indexOfDeleted],
      newItem = {...oldItem, [propName]: !oldItem[propName]};
    return [...arr.slice(0, indexOfDeleted),
      newItem,
      ...arr.slice(indexOfDeleted + 1)
    ];
  }

  handleHide = id => {
    this.setState({data: this.toggleProperty(this.state.data, id, 'hide')});
  };

  render() {
    const {showActionField, data, selectedId} = this.state;
    return <TableView handleHide={this.handleHide} handleShowActionField={this.handleShowActionField}
                      selectedId={selectedId} showActionField={showActionField}
                      data={data}/>
  }
}

export default onClickOutside(Table);