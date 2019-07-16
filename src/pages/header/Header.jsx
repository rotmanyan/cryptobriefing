import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as selectors from '../../data/signUser/selectors';
import { signUpDefault } from 'data/signUser/actions';

import SignOut from '../../components/signOut/signOut';
import { BurgerHeaderMenu } from './BurgerHeaderMenu';
import './header.scss';

class Header extends Component {
  state = {
    isAdmin: false,
    isBurgerOpen: false,
  };
  handleAdminHeader = () => this.setState({ isAdmin: !this.state.isAdmin });

  handleBurgerMenu = () =>
    this.setState(({ isBurgerOpen }) => ({ isBurgerOpen: !isBurgerOpen }));

  render() {
    const { handleVisible, isAuthenticated, signUpDefault } = this.props;
    const { isAdmin, isBurgerOpen } = this.state;

    return (
      <div
        className={`${
          isAdmin
            ? 'wrapper--black wrapper--navigation wrapper--admin'
            : 'wrapper--black wrapper--navigation'
        }`}
      >
        <div className='container'>
          <nav className='navigation'>
            <div className='burger__header'>
              <button
                className={`${
                  isBurgerOpen
                    ? 'hamburger-slim hamburger-slim--active'
                    : 'hamburger-slim'
                }`}
                onClick={this.handleBurgerMenu}
              />
              <BurgerHeaderMenu
                isBurgerOpen={isBurgerOpen}
                isAuthenticated={isAuthenticated}
                handleVisible={handleVisible}
                handleBurgerMenu={this.handleBurgerMenu}
              />
            </div>

            <NavLink to='/dashboard' className='logo' />
            {isAdmin ? (
              <NavLink
                to='/dashboard'
                onClick={this.handleAdminHeader}
                className='navigation__back'
              >
                Back to website
              </NavLink>
            ) : (
              <div className='navigation__list'>
                <NavLink
                  activeClassName='navigation__item--active'
                  to='/dashboard'
                  className={'navigation__item'}
                >
                  dashboard
                </NavLink>
                <NavLink
                  activeClassName='navigation__item--active'
                  to='/portfolio'
                  className='navigation__item'
                >
                  portfolio
                </NavLink>
                <NavLink
                  activeClassName='navigation__item--active'
                  to='/charts'
                  className='navigation__item'
                >
                  charts
                </NavLink>
                <NavLink
                  activeClassName='navigation__item--active'
                  to='/news'
                  className='navigation__item'
                >
                  news
                </NavLink>
                <NavLink
                  activeClassName='navigation__item--active'
                  to='/about'
                  className='navigation__item'
                >
                  about
                </NavLink>
                <button
                  onClick={handleVisible}
                  className='navigation__item--send'
                  value='sendMessage'
                />
              </div>
            )}

            {isAuthenticated ? (
              <SignOut />
            ) : (
              <div className='loginSign'>
                <button
                  onClick={e => {
                    signUpDefault();
                    handleVisible(e);
                  }}
                  value='login'
                  className='loginSign__button'
                >
                  login
                </button>
                <button
                  onClick={handleVisible}
                  value='signUp'
                  className='loginSign__button loginSign__button--signUp'
                >
                  sign-up
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: selectors.isAuthenticated(state),
  signUpDefault,
});

export default connect(
  mapStateToProps,
  null,
  null,
  { pure: false },
)(Header);
