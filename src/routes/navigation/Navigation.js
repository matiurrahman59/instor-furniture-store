import React from 'react';

import { Outlet, Link, useNavigate } from 'react-router-dom';

import { ReactComponent as InstorLogo } from '../../assets/icons/Logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';

import Button from '../../components/button/Button';

import './navigation.scss';

const Navigation = () => {
  const navigate = useNavigate();

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
            Cart
          </Button>
          <Button className='button-container login'>Sign Up</Button>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Navigation;
