import React from 'react';

import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg';
import Button from '../button/Button';

import './LogIn.scss';

const LogIn = ({ closeModal, setSignInModalOpen, setSignUpModalOpen }) => {
  const onClick = () => {
    setSignInModalOpen(false);
    setSignUpModalOpen(true);
  };
  return (
    <div className='modal'>
      <div className='modal-body'>
        <div className='modal-header'>
          <span className='link' onClick={closeModal}>
            <LeftArrow fill='#000' />
          </span>
          Log In
        </div>
        <form className='login-form'>
          <input
            type='email'
            className='email-input'
            placeholder='Email'
            required
          />
          <input
            type='password'
            className='password-input'
            placeholder='Password'
            required
          />
          <Button className='log-in'>Log In</Button>
          <Button className='sign-up' onClick={onClick}>
            Sign Up
          </Button>
          <span>Forgot password</span>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
