import React from 'react';

const Title = ({
                 signIn, signUp, buy,
                 sell, forgotPassword, confirmForgot,
                 comments, unwatch, deleteAccount,
                 changePassword, resetPassword, cropAvatar,
                 columnsSettings, resetPortfolio
               }) => {
  if (signIn)
    return (
      <span className='popup__title'>Login</span>
    )
  if (signUp)
    return (
      <span className='popup__title'>CB Platform New Account</span>
    )
  if (buy)
    return (
      <span className='popup__title'>Buy {buy}</span>
    )
  if (sell)
    return (
      <span className='popup__title'>Sell {sell}</span>
    )
  if (forgotPassword)
    return (
      <span className='popup__title'>Forgot password</span>
    )
  if (confirmForgot)
    return (
      <span className='popup__title'>Confirm your eMail</span>
    )
  if (comments)
    return (
      <span className='popup__title'>comments</span>
    )
  if (resetPassword)
    return (
      <span className='popup__title'>Create password</span>
    )
  if (changePassword)
    return (
      <span className='popup__title'>Change Password</span>
    )
  if (unwatch)
    return (
      <span className='popup__title'>Unwatch coin</span>
    )
  if (deleteAccount)
    return (
      <span className='popup__title'>Delete Account</span>
    )
  if (cropAvatar)
    return (
      <span className='popup__title'>Crop avatar</span>
    )
  if (columnsSettings)
    return (
      <span className='popup__title'>Columns settings</span>
    )
  if (resetPortfolio)
    return (
      <span className='popup__title'>Reset Portfolio</span>
    )
  else return null
}

export default Title;