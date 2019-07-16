import React, {Component} from 'react';
import UploadAvatar from "pages/profile/UploadAvatar";
import ForgotPassword from 'components/forgotPassword/ForgotPassword';


export default class UserModification extends Component {


  render() {
    const {
      name,
      email,
      avatar,
      country,
      role,
      modalAvatar,
      handleFields,
      updateProfile,
      toggleModalReset,
      toggleModalAvatar,
      isNewUser = false,
      handleRoleChange,
      resetPasswordModalShow,
    } = this.props;
    return <div className="wrapper-profile">
      <div className="wrapper-profile-avatar">
        <div className="wrapper-avatar">
          {avatar ? (
            <img
              src={`${process.env.REACT_APP_SERVER_ORIGIN}/${avatar}`}
              className="avatar-img"
              alt="avatar"
            />
          ) : (
            <div className="avatar">{email[0]}</div>
          )}
        </div>
        <div className="wrapper-info">
          <div className="avatr-info">Your avatar</div>
          <div className="wrapper-button-update">
            <button className="button-upfate" onClick={toggleModalAvatar}>
              Update
            </button>
          </div>
        </div>
      </div>
      <div className="wrapper-form">
        <div className="wrapper-input">
          <label htmlFor="Username" className="label">
            Username
          </label>
          <input
            type="text"
            value={name}
            name="name"
            id="Username"
            className="input"
            autoComplete="new-password"
            onChange={handleFields}
          />
        </div>

        <div className="wrapper-input">
          <label htmlFor="Country" className="label">
            Country
          </label>
          <input
            type="text"
            id="Country"
            name="country"
            value={country}
            className="input"
            autoComplete="new-password"
            onChange={handleFields}
          />
        </div>

        {isNewUser && <div className="wrapper-input">
            <label className="label">Role</label>
            <div className="wrapper-btns wrapper-btns--admin">
              <button className={`${role=== 'user' ? 'admin__role admin__role--active' : 'admin__role'}`} onClick={handleRoleChange}>User</button>
              <button className={`${role=== 'admin' ? 'admin__role admin__role--active' : 'admin__role'}`} onClick={handleRoleChange}>Admin</button>
            </div>
          </div> }
        <div className="wrapper-input">
          <label htmlFor="eMail" className="label">
            eMail
          </label>
          <input
            type="email"
            id="eMail"
            name="email"
            value={email}
            className="input"
            autoComplete="new-password"
            onChange={handleFields}
          />
        </div>

        { isNewUser && <p className="admin__user-text">
          An email with a password for the account will be sent to this address.
        </p> }

        {isNewUser ? null : <div className="wrapper-input">
          <label htmlFor="Password" className="label">
            Password
          </label>
          <button className='admin__edit-reset-password-btn' onClick={toggleModalReset}>Reset Password</button>

        </div>}


        <div className="wrapper-buttons">
          {isNewUser ? <button className='button-create-new-user'>Create user</button> :
            <button className="button-delete" onClick={updateProfile}>
              Save changes
            </button>}
        </div>
      </div>
      {resetPasswordModalShow && <ForgotPassword handleVisible={toggleModalReset}/>}
      {modalAvatar && <UploadAvatar handleModalAvatar={toggleModalAvatar} />}

    </div>
  }
}