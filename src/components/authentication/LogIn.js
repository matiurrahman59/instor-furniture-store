import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { signIn } from '../../store/user.action.js';
import { uiActions } from '../../store/ui-slice.js';

import { signInWithGooglePopup } from '../../utils/firebase/FirebaseUtils';

import Notification from '../UI/Notification.js';
import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg';
import { ReactComponent as GoogleIcon } from '../../assets/icons/google-icon.svg';
import Button from '../button/Button';

import './LogIn.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const LogIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const borderColor = 'yellow';

  const dispatch = useDispatch();
  const showSpinner = useSelector((state) => state.ui.isLoading);

  const setformStatus = () => {
    dispatch(uiActions.toggleSignInFormStatus());
  };
  const setSignUpformVisible = () => {
    dispatch(uiActions.toggleSignInFormStatus());
    dispatch(uiActions.toggleSignUpFormStatus());
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
    resetFormFields();
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    dispatch(uiActions.toggleSignInFormStatus());
  };

  return (
    <div className='modal'>
      <div className='modal-body'>
        <div className='modal-header'>
          <span onClick={setformStatus} className='link'>
            <LeftArrow fill='#000' />
          </span>
          Log In
        </div>
        <form onSubmit={onSubmit} className='login-form'>
          <input
            type='email'
            className='email-input'
            placeholder='Email'
            name='email'
            value={email}
            onChange={handleChange}
            required
          />
          <input
            type='password'
            autoComplete='off'
            className='password-input'
            placeholder='Password'
            name='password'
            value={password}
            onChange={handleChange}
            required
          />
          <Button onClick={signInWithGoogle} type='button'>
            <GoogleIcon width='40px' height='40px' />
          </Button>
          <Button
            type='submit'
            className='log-in'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {!showSpinner && 'Log In'}
            {showSpinner && <Notification borderColor={borderColor} />}
          </Button>
          <Button
            onClick={setSignUpformVisible}
            type='button'
            className='sign-up'
          >
            Sign Up
          </Button>
          <span>Forgot password</span>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
