import React, {Component} from 'react';
import onClickOutside from "react-onclickoutside";


import {UsersView} from "./UsersView";

import './users.scss';


class Users extends Component {
  state = {
    selectedId: null,
    showActionField: false,
    data: [
      {
        id: 'qewqeqwe',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYRD3Ke9Fa61JW8oM8smWvr3pMEYfPjzsprynxSedsxYDrLf4vw',
        name: 'Dolie Roberts',
        country: 'Thailand',
        email: 'laisha.boyer@gmail.com',
        role: 'admin'
      },
      {
        id: 'qqedrq',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYRD3Ke9Fa61JW8oM8smWvr3pMEYfPjzsprynxSedsxYDrLf4vw',
        name: 'Florence Graves',
        country: 'Bahrain',
        email: 'esther_nicolas@yahoo.com',
        role: 'user'
      },
      {
        id: 'qqedr123q',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYRD3Ke9Fa61JW8oM8smWvr3pMEYfPjzsprynxSedsxYDrLf4vw',
        name: 'Jeremy Graves',
        country: 'Micronesia',
        email: 'new-jeremy@yahoo.com',
        role: 'user'
      },


    ]
  }

  handleShowActionField = id => this.setState(({showActionField}) => ({
    showActionField: !showActionField,
    selectedId: id
  }))

  handleClickOutside = () => this.setState({showActionField: false});

  render() {
    const {data, showActionField, selectedId} = this.state;

    return (
      <div className='admin-wrapper'>
        <UsersView data={data} handleShowActionField={this.handleShowActionField} showActionField={showActionField}
                   selectedId={selectedId}/>
      </div>
    );
  }
}

export default onClickOutside(Users);