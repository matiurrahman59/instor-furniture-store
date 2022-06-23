import React from 'react';

import { ReactComponent as AddToCartIcon } from '../../assets/icons/addtocart.svg';
import Button from '../button/Button';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  return (
    <div className='productCard-item'>
      <img src={imageUrl} className='product__img' alt={name} />
      <div className='product-item-details'>
        <span className='item-name'>{name}</span>
        <span className='item-price'>${price}</span>
        <Button buttonType='addtocart'>
          <AddToCartIcon fill='#E3964A' />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
