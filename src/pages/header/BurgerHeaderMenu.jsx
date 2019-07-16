import React from 'react';
import { NavLink } from 'react-router-dom';
import SignOut from '../../components/signOut/signOut';

export const BurgerHeaderMenu = ({
  handleVisible,
  isAuthenticated,
  isBurgerOpen,
  handleBurgerMenu,
}) => {
  return (
    <>
      {isBurgerOpen && (
        <div className='burger__wrapper'>
          <div className='burger__inner'>
            <div className='burger__menu'>
              <NavLink
                activeClassName='burger__link--active'
                to='/dashboard'
                className='burger__link'
                onClick={handleBurgerMenu}
              >
                Dashboard
              </NavLink>
              <NavLink
                activeClassName='burger__link--active'
                to='/portfolio'
                className='burger__link'
                onClick={handleBurgerMenu}
              >
                Portfolio
              </NavLink>
              <NavLink
                activeClassName='burger__link--active'
                to='/charts'
                className='burger__link'
                onClick={handleBurgerMenu}
              >
                Charts
              </NavLink>
              <NavLink
                activeClassName='burger__link--active'
                to='/news'
                className='burger__link'
                onClick={handleBurgerMenu}
              >
                News
              </NavLink>
              <NavLink
                activeClassName='burger__link--active'
                to='/about'
                className='burger__link'
                onClick={handleBurgerMenu}
              >
                About
              </NavLink>
            </div>
            <div className='burger__account'>
              <h1 className='burger__account-title'>My account</h1>
              {isAuthenticated ? (
                <SignOut handleBurgerMenu={handleBurgerMenu} />
              ) : (
                <div className='loginSign burger__login'>
                  <button
                    onClick={e => {
                      console.log('111');
                      handleVisible(e);
                      if (handleBurgerMenu) {
                        handleBurgerMenu();
                      }
                    }}
                    value='login'
                    className='loginSign__button'
                  >
                    login
                  </button>
                  <button
                    onClick={e => {
                      handleVisible(e);
                      if (handleBurgerMenu) {
                        handleBurgerMenu();
                      }
                    }}
                    value='signUp'
                    className='loginSign__button loginSign__button--signUp'
                  >
                    sign-up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerHeaderMenu;
