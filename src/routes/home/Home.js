import React from 'react';

import Slider from '../../components/slider/Slider';
import Category from '../../components/category/Category';
import Footer from '../../components/footer/Footer';
import Offer from '../../components/sell-offer/Offer';

import './home.scss';
import RoomFurniture from '../../components/room-furniture/RoomFurniture';
import SimilarProduct from '../../components/similar-product/similar-product';

const home = () => {
  return (
    <>
      <main>
        <div className='container'>
          <section className='banner__area'>
            <h1 className='banner-text'>
              Explore what <br /> your home needs
            </h1>
            <Slider />
          </section>
          <Category />
          <Offer />
          <SimilarProduct />
          <RoomFurniture />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default home;
