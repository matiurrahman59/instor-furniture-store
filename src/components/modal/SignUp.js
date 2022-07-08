import React from 'react';

import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg';
import Button from '../button/Button';

import './SignUp.scss';

const SignUp = ({ closeModal, setSignInModalOpen, setSignUpModalOpen }) => {
  const onClick = () => {
    setSignInModalOpen(true);
    setSignUpModalOpen(false);
  };

  return (
    <div className='modal'>
      <div className='modal-body'>
        <div className='modal-header'>
          <span className='link' onClick={closeModal}>
            <LeftArrow fill='#000' />
          </span>
          Sign Up
        </div>
        <form className='signup-form'>
          <input
            type='text'
            className='name-input'
            placeholder='Display Name'
          />
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
          <input
            type='password'
            className='password-input2'
            placeholder='Confirm Password'
            required
          />
          <Button className='sign-up'>Sign Up</Button>
        </form>
        <div className='footer'>
          <span>
            Have an account?{' '}
            <span className='login' onClick={onClick}>
              Log in
            </span>
          </span>
          <span className='forgot-password'>Forgot password</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
