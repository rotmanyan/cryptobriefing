import React, {Component} from 'react';
import {Body} from "./components/body/Body";
import {Head} from "./components/head/Head";
import './popup.scss'

class Popup extends Component {
  state = {
    email: '',
    password: '',
    visibility: false,
    type: 'password'
  }

  componentDidUpdate() {
    const {handleVisible, isMessage} = this.props
    if (isMessage === 'good') handleVisible(null)
  }

  handlePassword = e => this.setState({password: e.target.value})
  handleEmail = e => this.setState({email: e.target.value})
  handleEye = () => {
    const {type} = this.state
    if (type === 'text') this.setState({type: 'password'})
    else this.setState({type: 'password'})
  }
  handleSubmit = e => {
    const {email, password} = this.state
    const {login, handleVisible, isMessage} = this.props


  }

  render() {
    const {
      signIn, signUp, buy,
      sell, forgotPassword, confirmForgot,
      comments, resetPassword, handleVisible
    } = this.props

    return (
      <>
        <div className='popup__subWrapper' onClick={handleVisible}>
        </div>
        <div className='popup__wrapper'>
          <Head
            handleVisible={handleVisible}

            signIn={signIn}
            signUp={signUp}
            buy={buy}
            sell={sell}
          />
          <Body
            signIn={signIn}
            signUp={signUp}
            comments={comments}
            forgotPassword={forgotPassword}
            confirmForgot={confirmForgot}
            resetPassword={resetPassword}

            handlePassword={this.handlePassword}
            handleEmail={this.handleEmail}
            handleEye={this.handleEye}
          />
        </div>
      </>
    );
  }
}

export default Popup;