import React, { useState, useContext } from 'react';

import { Outlet, Link, useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart-context';
import { UserContext } from '../../contexts/user-context';

import { signOutUser } from '../../utils/firebase/FirebaseUtils';

import { ReactComponent as InstorLogo } from '../../assets/icons/Logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';

import Button from '../../components/button/Button';
import LogIn from '../../components/authentication/LogIn';
import SignUp from '../../components/authentication/SignUp';

import './navigation.scss';

const Navigation = () => {
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const navigate = useNavigate();

  const { currentUser } = useContext(UserContext);
  const { cartCount } = useContext(CartContext);

  const SignInModal = () => setSignInModalOpen(!isSignInModalOpen);
  const SignUpModal = () => setSignUpModalOpen(!isSignUpModalOpen);

  return (
    <div className='container'>
      <header className='header'>
        <Link to='/' className='header__logo'>
          <InstorLogo />
        </Link>
        <form className='search-field'>
          <span className='search-field-icon'>
            <SearchIcon fill='rgba(0, 0, 0, 0.36)' />
          </span>
          <input
            type='text'
            className='search-field__input'
            placeholder='WHat are you looking for?'
          />
        </form>
        <div className='header__right-item'>
          <Button
            className='button-container cart'
            onClick={() => navigate('checkout')}
          >
            <CartIcon fill='#e3964a' />
            {cartCount > 0 && <span>{cartCount}</span>}
          </Button>
          {currentUser ? (
            <Button className='button-container login' onClick={signOutUser}>
              Sign Out
            </Button>
          ) : (
            <Button className='button-container login' onClick={SignInModal}>
              Sign In/Sign Up
            </Button>
          )}
        </div>
        {isSignInModalOpen && (
          <LogIn
            closeModal={SignInModal}
            setSignInModalOpen={setSignInModalOpen}
            isSignUpModalOpen={isSignInModalOpen}
            setSignUpModalOpen={setSignUpModalOpen}
          />
        )}
        {isSignUpModalOpen && (
          <SignUp
            closeModal={SignUpModal}
            setSignInModalOpen={setSignInModalOpen}
            setSignUpModalOpen={setSignUpModalOpen}
          />
        )}
      </header>
      <Outlet />
    </div>
  );
};

export default Navigation;
