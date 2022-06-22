import React from 'react';

import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as InstorLogo } from '../../assets/icons/Logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';

import './navigation.scss';

const Navigation = () => {
  return (
    <div className='container'>
      <header className='header'>
        <Link to='/' className='header__logo'>
          <InstorLogo />
        </Link>
        <form className='search-field'>
          <span className='search-field-icon'>
            <SearchIcon />
          </span>
          <input
            type='text'
            className='search-field__input'
            placeholder='WHat are you looking for?'
          />
        </form>
        <div className='header__right-item'>
          <div className='cart'>
            <span className='cart__icon'>
              <CartIcon fill='#e3964a' />
            </span>
            <span>cart</span>
          </div>
          <button className='btn'>Log in/Sign Up</button>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Navigation;
