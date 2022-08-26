import React from 'react';

import { ReactComponent as Insta } from '../../assets/icons/insta.svg';
import { ReactComponent as Pinterest } from '../../assets/icons/pinterest.svg';
import { ReactComponent as Youtube } from '../../assets/icons/youtube.svg';
import { ReactComponent as Moon } from '../../assets/icons/moon.svg';
import { ReactComponent as Sunny } from '../../assets/icons/sunny.svg';
import { ReactComponent as Circle } from '../../assets/icons/circle.svg';

import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-area'>
          <div className='social-icon'>
            <Link to='/'>
              <Insta />
            </Link>
            <Link to='/'>
              <Pinterest />
            </Link>
            <Link to='/'>
              <Youtube />
            </Link>
          </div>
          <span className='copyright-text'>@ Instor 2022</span>
          <div className='ui-changer'>
            <Moon fill='#969696' />
            <span className='color-toggle-switch'>
              <Circle />
            </span>
            <Sunny fill='#969696' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
