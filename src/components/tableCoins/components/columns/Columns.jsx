import React from 'react';
import icSettings from 'assets/icons/ic-settings.svg'
import Presets from "../../../Presets/Presets";

const Columns = ({isAuth, openSettings, watchSetting}) => {
  return (
    <>
      {watchSetting()}
      <div className='listed__dropDown'>
        <Presets/>
        {isAuth && <button
          onClick={openSettings}
          value='listedIcSettings'
          className='listed__columnsSettings'
        >
          Columns Settings
          <img
            defaultValue='icSettings'
            className='listed__columnsSettings--icon'
            src={icSettings}
            alt='icSettings'
          />
        </button>}
      </div>
    </>
  );
};

export default Columns;