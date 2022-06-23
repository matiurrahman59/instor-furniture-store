import React from 'react';

import { Link, useParams } from 'react-router-dom';
import PRODUCT_DATA from '../../product-data';

import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg';

import './Product.scss';
import ProductCard from '../../components/product-card/ProductCard';
import Offer from '../../components/sell-offer/Offer';
import Footer from '../../components/footer/Footer';

const Product = () => {
  const { productItem } = useParams();
  const titleimage = `${productItem}TitleImg`;
  return (
    <div className='product-page-container'>
      <div
        className='product-page-header'
        style={{
          backgroundImage: `url(${PRODUCT_DATA[titleimage]})`,
        }}
      >
        <div className='product-page-body'>
          <Link to='/' className='link'>
            <LeftArrow fill='#fff' />
          </Link>
          <span className='header-title'>{productItem}</span>
        </div>
      </div>
      <div className='product-card-contianer'>
        {PRODUCT_DATA[productItem].map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <Offer />
      <Footer />
    </div>
  );
};

export default Product;
