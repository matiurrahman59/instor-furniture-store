import React from 'react';

import Slider from '../../components/slider/Slider';
import Category from '../../components/category/Category';

import './home.scss';
import Footer from '../../components/footer/Footer';

const products = [
  {
    id: 1,
    title: 'sofa',
    imageUrl:
      'https://images.unsplash.com/photo-1634643836960-c345b3c3e998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    // route: 'shop/hats',
  },
  // {
  //   id: 2,
  //   title: 'chair',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1634643836960-c345b3c3e998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
  // },
  // {
  //   id: 3,
  //   title: 'desk',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1634643836960-c345b3c3e998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
  // },
];

const home = () => {
  return (
    <>
      <section className='banner__area'>
        <h1 className='banner-text'>
          Explore what <br /> your home needs
        </h1>
        <div className='slider__container'>
          {products.map((product) => {
            return <Slider key={product.id} product={product} />;
          })}
        </div>
      </section>
      <Category />
      <Footer />
    </>
  );
};

export default home;
