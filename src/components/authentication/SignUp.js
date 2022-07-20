import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signUp } from '../../store/user.action';
import { uiActions } from '../../store/ui-slice';

import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg';
import Button from '../button/Button';
import Notification from '../UI/Notification';

import './SignUp.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const dispatch = useDispatch();
  const showSpinner = useSelector((state) => state.ui.isLoading);

  const borderColor = 'white';

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const setformStatus = () => {
    dispatch(uiActions.toggleSignUpFormStatus());
  };

  const setSignInformVisible = () => {
    dispatch(uiActions.toggleSignUpFormStatus());
    dispatch(uiActions.toggleSignInFormStatus());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }

    dispatch(signUp(email, password, displayName));
    resetFormFields();
  };

  return (
    <div className='modal'>
      <div className='modal-body'>
        <div className='modal-header'>
          <span onClick={setformStatus} className='link'>
            <LeftArrow fill='#000' />
          </span>
          Sign Up
        </div>
        <form onSubmit={submitHandler} className='signup-form'>
          <input
            type='text'
            className='name-input'
            placeholder='Display Name'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            required
          />
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
          <input
            type='password'
            autoComplete='off'
            className='password-input2'
            placeholder='Confirm Password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            required
          />
          <Button type='submit' className='sign-up'>
            {!showSpinner && 'Sign Up'}
            {showSpinner && <Notification borderColor={borderColor} />}
          </Button>
        </form>
        <div className='footer'>
          <span>
            Have an account?{' '}
            <span onClick={setSignInformVisible} className='login'>
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
