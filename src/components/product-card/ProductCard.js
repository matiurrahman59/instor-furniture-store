import React, { useContext } from 'react';

import { ReactComponent as AddToCartIcon } from '../../assets/icons/addtocart.svg';
import Button from '../button/Button';

import { CartContext } from '../../contexts/cart-context';

import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <div className='productCard-item'>
      <div
        className='productCard-item-img'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className='product-item-details'>
        <span className='item-name'>{name}</span>
        <span className='item-price'>${price}</span>
        <Button buttonType='addtocart' onClick={addProductToCart}>
          <AddToCartIcon fill='#E3964A' />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
