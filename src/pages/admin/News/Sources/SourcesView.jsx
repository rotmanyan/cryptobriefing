import React from 'react';
import Switch from "react-switch";

import search from "assets/icons/ic-search-grey.svg";

export const SourcesView = ({handleSearch, handleSwitchChange, data}) => (
  <div className='adminArticles__wrapper'>
    <div className="adminArticles__header">
      <h1 className="adminArticles__title">Sources</h1>
    </div>
    <div className="block-search">
      <img src={search} alt="search"/>
      <input
        input="text"
        className="search"
        placeholder="Search"
        onChange={handleSearch}
      />
    </div>
    <div className="adminSources__body">
      {
        data.map(el =>  <div key={el.id} className="adminSources__item">
          <p className={`${el.checked ? "adminSources__resource" : "adminSources__resource adminSources__resource--hidden"} `}>{el.title}</p>
          <div className="wrapper-switch">
            <Switch
              width={38}
              height={20}
              checked={el.checked}
              onChange={() => handleSwitchChange(el.id)}
              checkedIcon={false}
              uncheckedIcon={false}
              offColor="#7f7f7f"
              onColor="#02c88a"
              id="desktop_notifications"
            />
          </div>
        </div>)
      }


    </div>
  </div>
)