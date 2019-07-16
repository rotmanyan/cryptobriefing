import React, { Component } from 'react';
import './signUp.scss';

import close from 'assets/icons/ic-closeWhite.svg';
import { signUp } from 'data/signUser/operation';
import { signUpDefault } from 'data/signUser/actions';
import { connect } from 'react-redux';
import invisible from 'assets/icons/invisible-inv.svg';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    visibility: false,
    type: 'password',
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { handleVisible, isMessage } = this.props;

    if (isMessage === 'good') handleVisible(null);
  }

  setEmail = e => {
    this.setState({ email: e.target.value });
  };

  setPassword = e => {
    this.setState({ password: e.target.value });
  };

  createAccount = e => {
    const {
      registration,
      handleVisible,
      isMessage,
      signUpDefault,
    } = this.props;
    const { email, password } = this.state;
    registration({ email, password });

    if (isMessage === 'good') {
      signUpDefault();
      setTimeout(handleVisible(e), 0);
    }
  };

  createAccountKey = e => {
    const { registration, handleVisible, signUpDefault } = this.props;
    const { email, password } = this.state;

    if (e.keyCode === 13) {
      registration({ email, password });
      signUpDefault();
      setTimeout(handleVisible(e), 0);
    } else if (e.keyCode === 27) handleVisible(null);
  };

  handleVisibility = () => {
    const { visibility } = this.state;

    visibility
      ? this.setState({ visibility: false, type: 'password' })
      : this.setState({ visibility: true, type: 'text' });
  };

  componentWillUnmount() {
    const { signUpDefault } = this.props;
    signUpDefault();
  }

  render() {
    const { handleVisible, isMessage } = this.props;
    const { email, password, type } = this.state;

    return (
      <div className='singUp'>
        <div className='login__subWrapper' onClick={handleVisible} />
        <div className='login__wrapper'>
          <div className='login__head'>
            <span className='login__title'>CB Platform New Account</span>
            <img
              className='login__close'
              src={close}
              onClick={handleVisible}
              alt='close'
            />
          </div>
          <p className='login__description'>
            Create an account to receive great stories in your inbox,
            personalize your homepage, and follow authors and topics that you
            love.
          </p>
          <div className='login__body'>
            <div className='login__inputWrapper login__inputWrapper--margin'>
              {email ? <label className='login__label'>Email</label> : null}
              <input
                className='login__input'
                placeholder='Email'
                type='email'
                value={email}
                onChange={this.setEmail}
              />
            </div>
            <div className='login__inputWrapper'>
              {password ? (
                <label className='login__label'>Password</label>
              ) : null}
              <input
                className='login__input'
                placeholder='Password'
                type={type}
                value={password}
                onChange={this.setPassword}
                onKeyDown={this.createAccountKey}
              />
              <img
                className='login__watch'
                src={invisible}
                onClick={this.handleVisibility}
                alt='watch'
              />
            </div>
          </div>

          {isMessage === 'signUpError' && (
            <p className='currentPassword currentPassword--red'>
              Sorry this user already exist
            </p>
          )}
          <div className='login__btn--box login__bottomWrapper'>
            <input
              type='submit'
              value='create account'
              className='login__btn login__btn--signUp'
              onClick={this.createAccount}
            />
            <span
              className='login__btn login__btn--cancel'
              onClick={handleVisible}
            >
              cancel
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isMessage: state.session.message,
});

const mapDispatchToProps = {
  registration: signUp,
  signUpDefault,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
