import React from 'react';
import invisible from 'assets/icons/invisible-inv.svg'
import visible from '../../assets/icons/eye.svg'

export const Body = ({
                       signIn,
                       signUp,
                       forgotPassword,
                       confirmForgot,
                       resetPassword,
                       email,
                       password,
                       type,
                       visibility,
                       handleChangeLogin,
                       handleChangePassword,
                       handleSubmit,
                       isMessage,
                       redirectForgot,
                       redirectSingUp,

                       handleEmail,
                       handlePassword,
                       handleEye
                     }) => {
  return (
    <div className='popup__body'>
      <input
        className='popup__input'
        placeholder='Email'
        type='email'
        value={email}
        onChange={handleEmail}
      />
      <div className='popup__inputWrapper'>
        <input
          className='popup__input'
          placeholder='Password'
          type={type}
          value={password}
          onChange={handlePassword}
          onKeyDown={handleSubmit}
        />
        <img className='popup__watch' src={visibility ? visible : invisible} onClick={handleEye} alt='watch'/>
      </div>
      {isMessage === 'error'
        ? <p className="currentPassword currentPassword--red">Your password does not match</p>
        : null}
      <p className="popup__forgot" onClick={redirectForgot}>Forgot your username/ password?</p>
      <button value='signIn' className='popup__btn' onClick={handleSubmit}>sign in</button>
      <p className="popup__text">No account?
        <span className='popup__text popup__text--link' onClick={redirectSingUp}> Create one</span>
      </p>
    </div>
  )
}