import React from 'react';
import { Link } from 'react-router-dom';

// component
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import './slider.scss';

const products = [
  {
    id: 1,
    title: 'sofa',
    imageUrl:
      'https://images.unsplash.com/photo-1634643836960-c345b3c3e998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    route: 'product/sofas',
  },
  {
    id: 2,
    title: 'chair',
    imageUrl:
      'https://images.unsplash.com/photo-1634643836960-c345b3c3e998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    route: 'product/chairs',
  },
  {
    id: 3,
    title: 'desk',
    imageUrl:
      'https://images.unsplash.com/photo-1634643836960-c345b3c3e998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    route: 'product/desks',
  },
];

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      slidesPerView={1}
      // navigation
      // autoplay={true}
      pagination={{ clickable: true }}
    >
      {products.map(({ id, title, imageUrl, route }) => (
        <SwiperSlide key={id}>
          <div className='slider__container'>
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
                  <Link to={`/${route}`}>Learn more &rarr;</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
