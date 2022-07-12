import React, { useState } from 'react';

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/FirebaseUtils';

import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg';
import { ReactComponent as GoogleIcon } from '../../assets/icons/google-icon.svg';
import Button from '../button/Button';

import './LogIn.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const LogIn = ({ closeModal, setSignInModalOpen, setSignUpModalOpen }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
      closeModal();
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('no user with this email');
          break;
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const onClick = () => {
    setSignInModalOpen(false);
    setSignUpModalOpen(true);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    closeModal();
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
          <Button type='submit' className='log-in'>
            Log In
          </Button>
          <Button type='button' className='sign-up' onClick={onClick}>
            Sign Up
          </Button>
          <span>Forgot password</span>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
