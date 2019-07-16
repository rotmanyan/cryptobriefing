import React, {Component} from 'react'
import close from "assets/icons/ic-closeWhite.svg"

class ForgotPassword extends Component {
  state = {
    email: '',
    confirm: false,
    currentTime: 0
  }


  setForgotMail = e => (
    this.setState({email: e.target.value})
  )

  setConfirmEmail = () => {
    const {email, confirm} = this.state
    this.setState(email ? {confirm: !confirm} : alert('please write email address'))
  }

  renderForgot = () => {

    const {email} = this.state
    const {handleVisible} = this.props

    return (
      <div>
        <div className="login__head">
          <span className="login__title">Forgot password</span>
          <img className='login__close' onClick={handleVisible} src={close} alt="close"/>
        </div>
        <p className="login__description">Please enter your registered eMail address we will get back to you
          with the reset password link and confirmation OTP thanks</p>
        <div className="login__body">
          <div className='login__inputWrapper'>
            {email ? <label className="login__label">eMail</label> : null}
            <input
              className='login__input'
              placeholder='eMail'
              type='email'
              value={email}
              onChange={this.setForgotMail}
            />
          </div>
        </div>
          <div className="login__bottomWrapper">
              <span onClick={this.setConfirmEmail} className="login__btn login__btn--signUp">Reset Password</span>
          </div>
      </div>
    )
  }

  renderForgotConfirm = () => {
    const {email} = this.state
    const {handleVisible} = this.props

    return (
      <div>
        <div className="login__head">
          <span className="login__title">Confirm your eMail</span>
          <img className='login__close' onClick={handleVisible} src={close} alt="close"/>
        </div>
        <div className="login__description">
          <p>We sent a confirmation eMail to</p>
          <p>{email}</p>
          <br/>
          <p>Check your eMail and click on the</p>
          <p>confirmation link to continue.</p>
        </div>
        <div className="login__body">
          <br/>
          <br/>
          <br/>
          <p style={{color: '#fff'}} onClick={this.setConfirmEmail}>Resend eMail</p>
        </div>
      </div>
    )
  }

  render() {
    const {confirm} = this.state

    return (
      <div className="singUp">
        <div className="login__subWrapper">
        </div>
        <div className="login__wrapper">
          {!confirm ? this.renderForgot() : this.renderForgotConfirm()}
        </div>
      </div>
    );
  }
}

export default ForgotPassword;