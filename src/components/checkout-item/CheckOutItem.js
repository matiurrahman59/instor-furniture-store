import React from 'react';

import { ReactComponent as RemoveToCart } from '../../assets/icons/subtract.svg';
import { ReactComponent as AddToCart } from '../../assets/icons/addtocart.svg';
import { ReactComponent as Remove } from '../../assets/icons/remove.svg';
import Button from '../button/Button';

import './CheckOutItem.scss';
import Summary from '../item-summary/Summary';

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, code, quantity } = cartItem;
  return (
    <div className='checkout-item-container'>
      <div className='item-details-container'>
        <div className='item-image'>
          <img src={imageUrl} alt={name} />
        </div>
        <div className='item-details'>
          <span className='item-name'>{name}</span>
          <span className='item-code'>{code}</span>

          <div className='item-quantity-control'>
            <span>
              <RemoveToCart fill='Black' />
            </span>
            <span className='quantity'>{quantity}</span>
            <span>
              <AddToCart fill='Black' />
            </span>
          </div>
        </div>
        <div className='item-remove'>
          <span className='item-remove-icon'>
            <Remove fill='Black' />
          </span>
          <span className='item-price'>{price}</span>
        </div>
      </div>
      <Summary price={price} />
    </div>
  );
};

export default CheckOutItem;
