import React, {Component} from 'react';
import close from 'assets/icons/ic-close.svg'

class SendMessage extends Component {
  state = {
    name: '',
    email: '',
    comment: '',
  }

  setEmail = e => this.setState({email: e.target.value})
  setName = e => this.setState({name: e.target.value})
  setComment = e => this.setState({comment: e.target.value})
  sendInfo = () => console.log(this.state, 'this.state')

  render() {
    const {name, email, comment} = this.state
    const {handleVisible} = this.props

    return (
      <div className='sendMessage'>
        <div className='login__subWrapper' onClick={handleVisible}>
        </div>
        <div className='login__wrapper'>

          <div className='login__head login__head--margin'>
            <span className='login__title'>
              Questions and Comments
            </span>
            <img
              className='login__close'
              src={close}
              onClick={handleVisible}
              alt='close'
            />
          </div>

          <div className='login__body'>
            <div className='login__inputWrapper login__inputWrapper--margin'>
              {name ? <label className='login__label'>FIRST AND LAST NAME</label> : null}
              <input
                className='login__input'
                placeholder='First and Last name'
                type='text'
                value={name}
                onChange={this.setName}
              />
            </div>
            <div className='login__inputWrapper'>
              {email ? <label className='login__label'>Email</label> : null}
              <input
                className='login__input'
                placeholder='Email'
                type='text'
                value={email}
                onChange={this.setEmail}
              />
            </div>
            <div className='login__inputWrapper'>
              <label className='login__label login__label--block'>Comment or message</label>
              <input
                className='login__input login__input--textarea'
                type='textarea'
                value={comment}
                onChange={this.setComment}
              />
            </div>
            <div className="login__btn--box login__bottomWrapper">
              <span className='login__btn login__btn--signUp' onClick={this.sendInfo}>submit</span>
              <span className='login__btn login__btn--cancel' onClick={handleVisible}>cancel</span>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default SendMessage;