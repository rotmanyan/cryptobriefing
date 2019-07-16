import React from 'react';
import {Link} from "react-router-dom";

export const TablePopup = ({props: {handleShowActionField, handleHide, selectedId}, id, hide}) => {
  return <div className="admin__table-action-popup">
    <button className='admin__table-action-btn' onClick={() => handleShowActionField(id)}>•••</button>
    <Link to={{pathname: '/admin/news/edit', state: {hideNavigation: true}}}> Edit </Link>
    <button className='admin__table-action-hide' onClick={() => handleHide(id)}>{hide ? 'Unhide' : 'Hide'}</button>
  </div>
}