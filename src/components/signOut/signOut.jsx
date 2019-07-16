import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

import { NavLink } from 'react-router-dom';
import { signOut } from 'data/signUser/operation';
import arrow from 'assets/icons/arrowDown.svg';
import logOut from 'assets/icons/exit.svg';
import './signOut.scss';
import { connect } from 'react-redux';

class SignOut extends Component {
  state = {
    email: '',
    isVisible: false,
  };

  componentDidMount() {
    const emailUser = localStorage.getItem('email');
    this.setState({ email: emailUser });
  }

  openModal = () => this.setState({isVisible: !this.state.isVisible})
  handleClickOutside = () => this.setState({isVisible: false});

  handleBurgerMenuDefault = () => {
    const { handleBurgerMenu } = this.props;
    this.openModal();
    if (handleBurgerMenu) {
      handleBurgerMenu();
    }
  };

  handleLogoutBurger = () => {
    const { logout, handleBurgerMenu } = this.props;
    logout();
    if (handleBurgerMenu) {
      handleBurgerMenu();
    }
  };

  render() {
    const { email, isVisible } = this.state;

    return (
      <div className='signOut__wrapper'>
        <p className='login__signOut' onClick={this.openModal}>
          <span className='login__signOut--avatar'>{email[0]}</span>
          <span className='login__signOut--span'> {email}</span>
          <img src={arrow} alt='arrow' className='login__signOut--arrow' />
        </p>
        {isVisible && (
          <div className='signOut__triangle triangle'>
            <div className='signOut__selectBox'>
              <NavLink
                onClick={this.handleBurgerMenuDefault}
                to='/profile'
                className='signOut__select'
              >
                User profile
              </NavLink>
              <p className='signOut__select'>My account</p>
              <NavLink
                onClick={this.handleBurgerMenuDefault}
                to='/profile/settings'
                className='signOut__select'
              >
                Settings
              </NavLink>
              <p className='signOut__select'>Upgrade account</p>
            </div>
            <NavLink
              to='/dashboard'
              className='signOut__btn'
              value='Sign-out'
              onClick={this.handleLogoutBurger}
            >
              Log Out <img className='iconLogout' src={logOut} alt='logout' />
            </NavLink>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = {
  logout: signOut,
};

export default connect(
  null,
  mapDispatchToProps,
)(onClickOutside(SignOut));
