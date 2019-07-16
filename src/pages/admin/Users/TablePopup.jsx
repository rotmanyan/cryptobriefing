import React from 'react';
import {Link} from "react-router-dom";

export const TablePopup = ({props: {handleShowActionField, selectedId}, id}) => {
  return <div className="admin__table-action-popup">
    <button className='admin__table-action-btn' onClick={() => handleShowActionField(id)}>•••</button>
    <Link to={{pathname: '/admin/user/edit', state: {hideNavigation: true, redirectToUsers: true}}}> Edit </Link>
    <button className='admin__table-action-view-log'>View Log</button>
    <button className='admin__table-action-delete-user'>Delete User</button>
  </div>
}