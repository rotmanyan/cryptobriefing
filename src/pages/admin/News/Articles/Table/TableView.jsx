import React from 'react';
import {TablePopup} from './TablePopup';

import './table.scss';


export const TableView = props => {
  const renderTableItems = el => <div key={el.id} className={`${el.hide ? 'admin__table-row admin__table-row--hidden' : 'admin__table-row'}`}>
    <div className="admin__table-item admin__table-item--title">{el.title}</div>
    <div className="admin__table-item admin__table-item--time">{el.time}</div>
    <div className="admin__table-item admin__table-item--source">{el.source}</div>
    <div className="admin__table-item admin__table-item--status">{el.status}</div>
    <div className="admin__table-item admin__table-item--action">
      {props.showActionField && props.selectedId === el.id && <TablePopup props={props} id={el.id} hide={el.hide}/>}
      <button className='admin__table-action-btn' onClick={() => props.handleShowActionField(el.id)}>•••
      </button>
    </div>
  </div>


  return <div
    className='admin__table-wrapper'>
    <div className='admin__table-inner'>
      <div className="admin__table-header">
        <div className="admin__table-item admin__table-item--title">Title</div>
        <div className="admin__table-item admin__table-item--time">Time</div>
        <div className="admin__table-item admin__table-item--source">Source</div>
        <div className="admin__table-item admin__table-item--status">Status</div>
        <div className="admin__table-item admin__table-item--action">
        </div>
      </div>
      <div className="admin__table-body">
        <div className="admin__table-items">
          {props.data.map(renderTableItems)}
        </div>
      </div>
    </div>
  </div>
}