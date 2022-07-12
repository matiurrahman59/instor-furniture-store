import React, { useState } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/FirebaseUtils';

import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg';
import Button from '../button/Button';

import './SignUp.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = ({ closeModal, setSignInModalOpen, setSignUpModalOpen }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onClick = () => {
    setSignInModalOpen(true);
    setSignUpModalOpen(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      closeModal();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else if (error.code === 'auth/invalid-email') {
        alert('Cannot create user, email invalid');
      } else console.log('something went wrong', error);
    }
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
        <form onSubmit={onSubmit} className='signup-form'>
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
            Sign Up
          </Button>
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
