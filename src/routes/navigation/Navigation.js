import React from 'react';
import {
  Outlet,
  Link,
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../store/user.slice';

import { signOutUser } from '../../utils/firebase/FirebaseUtils';

import { ReactComponent as InstorLogo } from '../../assets/icons/Logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';

import Button from '../../components/button/Button';
import LogIn from '../../components/authentication/LogIn';

import './navigation.scss';
import { uiActions } from '../../store/ui-slice';
import SignUp from '../../components/authentication/SignUp';

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const currentUser = useSelector((state) => state.user.currentUser);
  const isSignInFormVisible = useSelector(
    (state) => state.ui.isSignInFormVisible
  );
  const isSignUpFormVisible = useSelector(
    (state) => state.ui.isSignUpFormVisible
  );

  const setformVisible = () => {
    dispatch(uiActions.toggleSignInFormStatus());
  };

  const signOut = () => {
    signOutUser();
    dispatch(userActions.logOut());
  };

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
            {totalQuantity > 0 && <span>{totalQuantity}</span>}
          </Button>
          {currentUser ? (
            <Button className='button-container login' onClick={signOut}>
              Sign Out
            </Button>
          ) : (
            <Button onClick={setformVisible} className='button-container login'>
              Sign In/Sign Up
            </Button>
          )}
        </div>
        {isSignInFormVisible && <LogIn />}
        {isSignUpFormVisible && <SignUp />}
      </header>
      <Outlet />
    </div>
  );
};

export default Navigation;
