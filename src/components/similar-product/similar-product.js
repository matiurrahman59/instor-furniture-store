import React from 'react';

// component
import ProductCard from '../product-card/ProductCard';

// style
import './similar-product.scss';

const similarProduct = [
  {
    id: 1,
    name: 'Landskrona',
    imageUrl: 'https://i.ibb.co/9cbqcdC/Product-image.png',
    price: 499,
  },
  {
    id: 2,
    name: 'L Shape',
    imageUrl: '	https://m.media-amazon.com/images/I/716j4-UMkKL._SL1100_.jpg',
    price: 399,
  },
  {
    id: 3,
    name: 'Odger',
    imageUrl: 'https://i.ibb.co/YfgvyTV/Product-image-2.png',
    price: 399,
  },
  {
    id: 4,
    name: 'Home Desk',
    imageUrl:
      'https://www.ikea.com/us/en/images/products/lagkapten-alex-desk-white__1028366_pe835304_s5.jpg?f=s',
    price: 399,
  },
];

const PopularProduct = () => {
  return (
    <>
      <div className='similar-product'>
        <h1 className='header-text'>Popular</h1>
        <div className='product-card-contianer'>
          {similarProduct.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularProduct;
