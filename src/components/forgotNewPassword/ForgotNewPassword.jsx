import React, {Component} from 'react'
import './forgotNewPassword.scss'
import close from 'assets/icons/ic-closeWhite.svg'
import {signUp} from 'data/signUser/operation'
import {connect} from "react-redux";

class ForgotNewPassword extends Component {
  state = {
    password: '',
    newPassword: '',
    detailsPassword: {
      valid: false,
      text: ''
    }
  }

  newPassword = e => {
    const {registration} = this.props
    const {password, handleVisible} = this.state

    registration({password})
    setTimeout(handleVisible(e))

    if (e.keyCode === 13) {
      registration({password})
      setTimeout(handleVisible(e), 0)
    }
  }

  /*  newPasswordKey = e => {
      const {registration, handleVisible} = this.props
      const {password, newPassword} = this.state

      if (e.keyCode === 13) {
        registration({password})
        setTimeout(handleVisible(e), 0)
      }
      if (e.keyCode === 29) {
        handleVisible(null)
      }
    }*/

  controlPassword = event => {
    const {password, newPassword, detailsPassword: {valid}} = this.state
    const {handleVisible} = this.props

    const stepOne = typeof password === "string" && typeof newPassword === "string"
    const stepTwo = password.length > 5 && newPassword.length > 5
    const stepThree = password === newPassword
    const stepFour = stepOne ? stepTwo ? stepThree ? 'identical' : 'inequable' : 'lowLength' : 'notStringData'
    const stepFive = stepFour === 'identical'
    const stepOver = stepFour === 'lowLength' ? 'Password is too short' : stepFour === 'inequable' ? 'Your password does not match' : null

    this.setState({detailsPassword: {valid: stepFive, text: stepOver}})
    if (event.keyCode === 27) {
      handleVisible(null)
    }
    if (valid) {
      if (event.keyCode === 13) {
        this.newPassword(event)
      }
    }
  }

  incorrectPassword = () => {
    const {detailsPassword: {valid, text}} = this.state
    /*    const stepOne = typeof password === "string" && typeof newPassword === "string"
        const stepTwo = password.length > 5 && newPassword.length > 5
        const stepThree = password === newPassword
        const stepFour = stepOne ? stepTwo ? stepThree ? 'identical' : 'inequable' : 'lowLength' : 'notStringData'
        const stepFive = stepFour === 'identical'
        const stepOver = stepFour === 'lowLength' ? 'Password is too short' : stepFour === 'inequable' ? 'Your password does not match' : null*/

    return valid
      ? <p className="currentPassword currentPassword--green">Correct password</p>
      : <p className="currentPassword currentPassword--red">{text}</p>
  }

  setPassword = e => {
    this.setState({password: e.target.value})
  }

  setNewPassword = e => {
    this.setState({newPassword: e.target.value})
  }

  render() {
    const {password, newPassword} = this.state
    const {handleVisible} = this.props

    return (
      <div className='singUp'>
        <div className='login__subWrapper' onClick={handleVisible}>
        </div>
        <div className='login__wrapper'>

          <div className='login__head'>
            <span className='login__title'>Create password</span>
            <img className='login__close' src={close} onClick={handleVisible} alt='close'/>
          </div>
          <p className='login__description'>Sign in to get personalized story recommendations, follow authors and
            topics
            you love, and interact with stories.</p>
          <div className='login__body'>
            <div className='login__inputWrapper login__inputWrapper--margin'>
              {password ? <label className='login__label'>Password</label> : null}
              <input
                className='login__input'
                placeholder='Password'
                type='text'
                value={password}
                onChange={this.setPassword}
              />
            </div>
            <div className='login__inputWrapper'>
              {newPassword ? <label className='login__label'>Confirm password</label> : null}
              <input
                className='login__input'
                placeholder='Confirm password'
                type='text'
                value={newPassword}
                onChange={this.setNewPassword}
                onKeyDown={this.controlPassword}
              />
            </div>
          </div>
          {this.incorrectPassword()}
          <div className="login__bottomWrapper">
              <span className='login__btn login__btn--signUp' onClick={this.controlPassword}>submit</span>
          </div>
        </div>
      </div>
    )
  }
}

const
  mapDispatchToProps = {
    registration: signUp
  }

export default connect(
  null
  ,
  mapDispatchToProps
)(
  ForgotNewPassword
)