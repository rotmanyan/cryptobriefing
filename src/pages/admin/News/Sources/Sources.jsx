import React, {Component} from 'react';
import {SourcesView} from './SourcesView';

import './sources.scss';

export default class Sources extends Component {
  state = {
    data: [
      {
        id: 'qwewqeqwe',
        title: 'coinmarketcap.com/news/articla-12321',
        checked: false
      },
      {
        id: 'qweqewqrf',
        title: 'www.bloomberg.com',
        checked: true
      },
      {
        id: 'qwxqeqewqrf',
        title: 'coinmetrics.io',
        checked: true
      }
    ]
  }
  toggleProperty = (arr, key, propName) => {
    let indexOfDeleted = arr.findIndex((item) => item.id === key),
      oldItem = arr[indexOfDeleted],
      newItem = {...oldItem, [propName]: !oldItem[propName]};
    return [...arr.slice(0, indexOfDeleted),
      newItem,
      ...arr.slice(indexOfDeleted + 1)
    ];
  }

  handleSwitchChange = id => this.setState({data: this.toggleProperty(this.state.data, id, 'checked')});

  render() {
    const {data} = this.state;
    return <div className='admin-wrapper'>
      <div className="container">
        <SourcesView handleSwitchChange={this.handleSwitchChange} data={data}/>
      </div>
    </div>
  }
}