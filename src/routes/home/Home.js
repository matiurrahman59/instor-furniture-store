import React from 'react';

import Slider from '../../components/slider/Slider';
import Category from '../../components/category/Category';
import Footer from '../../components/footer/Footer';
import Offer from '../../components/sell-offer/Offer';

import './home.scss';

const home = () => {
  return (
    <>
      <section className='banner__area'>
        <h1 className='banner-text'>
          Explore what <br /> your home needs
        </h1>
        <Slider />
      </section>
      <Category />
      <Offer />
      <Footer />
    </>
  );
};

export default home;
