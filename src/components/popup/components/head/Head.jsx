import React from 'react'
import close from 'assets/icons/ic-closeWhite.svg'
import Title from "./title/Title";

export const Head = ({
                       handleVisible, signIn, signUp, buy,
                       sell, forgotPassword, confirmForgot,
                       comments, unwatch, deleteAccount,
                       changePassword, resetPassword, cropAvatar,
                       columnsSettings, resetPortfolio
                     }) => {
  return (
    <div className='popup__head'>
      <Title
        signIn={signIn}
        signUp={signUp}
        buy={buy}
        sell={sell}
      />
      <img className='popup__close' src={close} onClick={handleVisible} alt='close'/>
    </div>
  )
}