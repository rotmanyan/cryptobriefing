import React from 'react';
import close from "assets/icons/close-inv.svg";

const WindowRemoveWatch = ({target, remove, removeWatchList, component}) => {
  return (
    <div className='singUp'>
      <div className='login__subWrapper' onClick={() => removeWatchList(null)}>
      </div>
      <div className='login__wrapper'>
        <div className='login__head'>
          <span className='login__title'>Unwatch coin</span>
          <img className='login__close' onClick={() => removeWatchList(null)} src={close} alt='close'/>
        </div>
        <p className='login__description'>You are sure unwatch this coin?</p>
        <div className="login__btnBox">
        <span className='login__btn login__btn--removeWatchYes'
              onClick={() => {
                if (component === 'projectProfile') remove(target, 'projectProfile');
                if (component === 'watchlist') remove(target, 'watchlist');
                else remove(target, null);
                setTimeout(removeWatchList(null), 0)
              }}
        >Yes, thanks</span>
          <span className='login__btn login__btn--removeWatch' onClick={() => removeWatchList(null)}>Cancel</span>
        </div>
      </div>
    </div>
  );
};

export default WindowRemoveWatch;