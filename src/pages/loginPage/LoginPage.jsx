import React, { Component } from 'react';
import { connect } from 'react-redux';
import close from 'assets/icons/ic-closeWhite.svg';
import invisible from 'assets/icons/invisible-inv.svg';
import visible from 'assets/icons/visible-white.svg';
import './loginPage.scss';
import { signIn } from 'data/signUser/operation';
import * as selectors from '../../data/signUser/selectors';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    visibility: false,
    type: 'password',
  };

  componentDidMount() {
    const { handleVisible } = this.props;

    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) handleVisible(null);
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { handleVisible, isMessage } = this.props;
    if (isMessage === 'good') handleVisible(null);
  }

  handleChangeLogin = e => this.setState({ email: e.target.value });
  handleChangePassword = e => {
    return this.setState({ password: e.target.value });
  };

  handleVisible = () => {
    const { visibility } = this.state;
    visibility
      ? this.setState({ visibility: false, type: 'password' })
      : this.setState({ visibility: true, type: 'text' });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { login, handleVisible, isMessage } = this.props;

    if (e.target.value === 'signIn') {
      login({ session: { email, password } });
      if (isMessage === 'good') {
        handleVisible(null);
      }
    }
    if (e.keyCode === 13) {
      login({ session: { email, password } });
      if (isMessage === 'good') {
        handleVisible(null);
      }
    } else if (e.keyCode === 27) {
      handleVisible(null);
    }
  };
  componentWillUnmount() {}

  onWriteBody = () => {
    const { redirectSingUp, redirectForgot, isMessage } = this.props;
    const { email, password, type } = this.state;

    return (
      <form className='login__body'>
        <input
          className='login__input'
          placeholder='Email'
          type='email'
          value={email}
          onChange={this.handleChangeLogin}
          pattern='/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/'
        />
        <div className='login__inputWrapper'>
          <input
            className='login__input'
            placeholder='Password'
            type={type}
            value={password}
            onChange={this.handleChangePassword}
          />
          {type === 'password' ? (
            <img
              className='login__watch'
              src={invisible}
              onClick={this.handleVisible}
              alt='watch'
            />
          ) : (
            <img
              className='login__watch'
              src={visible}
              onClick={this.handleVisible}
              alt='watch'
            />
          )}
        </div>
        {isMessage === 'error' ? (
          <p className='currentPassword currentPassword--red'>
            Your password does not match
          </p>
        ) : null}
        <p className='login__forgot' onClick={redirectForgot}>
          Forgot your username/ password?
        </p>
        <div className='login__bottomWrapper'>
          <button
            type='submit'
            value='signIn'
            className='login__btn'
            onClick={e => this.handleSubmit(e)}
          >
            sign in
          </button>
          <p className='login__text'>
            No account?
            <span
              className='login__text login__text--link'
              onClick={redirectSingUp}
            >
              {' '}
              Create one
            </span>
          </p>
        </div>
      </form>
    );
  };

  render() {
    const { handleVisible } = this.props;

    return (
      <div className='loginPage'>
        <div className='login__subWrapper' onClick={handleVisible} />
        <div className='login__wrapper'>
          <div className='login__head'>
            <span className='login__title'>Login</span>
            <img
              className='login__close'
              src={close}
              onClick={handleVisible}
              alt='close'
            />
          </div>
          <p className='login__description'>
            Sign in to get personalized story recommendations, follow authors
            and topics you love, and interact with stories.
          </p>
          {this.onWriteBody()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isMessage: selectors.isMessage(state),
});
const mapDispatchToProps = {
  login: signIn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
