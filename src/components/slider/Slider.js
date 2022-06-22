import React from 'react';

import { Link } from 'react-router-dom';

import './slider.scss';

const Slider = ({ product }) => {
  const { title, imageUrl } = product;
  return (
    <div
      className='slider'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className='slider-details'>
        <span className='slider-text'>High quality {title}</span>
        <span className='slider-offer-text'>30% off</span>
        <div>
          <Link to='/'>Learn more &rarr;</Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
