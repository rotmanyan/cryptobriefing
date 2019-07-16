import React from 'react';


import {TablePopup} from "./TablePopup";
import search from "assets/icons/ic-search-grey.svg";





export const TableUsers = ({props}) => {
  const renderTableItems = el => <div key={el.id} className='admin__table-row'>
    <div className="admin__table-item admin__table-item--avatar"><img src={el.avatar} alt={el.avatar}/></div>
    <div className="admin__table-item admin__table-item--name">{el.name}</div>
    <div className="admin__table-item admin__table-item--country">{el.country}</div>
    <div className="admin__table-item admin__table-item--email">{el.email}</div>
    <div className="admin__table-item admin__table-item--role">{el.role}</div>
    <div className="admin__table-item admin__table-item--action">
      {props.showActionField && props.selectedId === el.id && <TablePopup props={props} id={el.id} hide={el.hide}/>}
      <button className='admin__table-action-btn' onClick={() => props.handleShowActionField(el.id)}>•••
      </button>
    </div>
  </div>


  return <div
    className='admin__table-wrapper admin__table--users'>
    <div className='admin__table-inner'>
      <div className="admin__table-header">
        <div className="admin__table-item admin__table-item--avatar"><img className='admin__table-search' src={search} alt={search}/></div>
        <div className="admin__table-item admin__table-item--name">Name</div>
        <div className="admin__table-item admin__table-item--country">Country</div>
        <div className="admin__table-item admin__table-item--email">E-mail</div>
        <div className="admin__table-item admin__table-item--role">Role</div>
        <div className="admin__table-item admin__table-item--action"></div>
      </div>
      <div className="admin__table-body">
        <div className="admin__table-items">
          {props.data.map(renderTableItems)}
        </div>
      </div>
    </div>
  </div>
}