import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../button/Button';

import './Summary.scss';

const Summary = ({ price }) => {
  const cartTotal = useSelector((state) => state.cart.totalPrice);

  const dCharge = cartTotal > 0 ? 10 : 0;
  const totalPrice = cartTotal + dCharge;

  return (
    <div className='item-summary-container'>
      <h1>Summary</h1>
      <div className='product-cost'>
        <span>Products</span>
        <span>{cartTotal}</span>
      </div>
      <div className='delevery-cost'>
        <span>Delivery</span>
        <span>${dCharge}</span>
      </div>
      <div className='total-cost'>
        <span>Total</span>
        <span className='totalPrice'>{totalPrice}</span>
      </div>
      <form className='coupon-form'>
        <input type='text' placeholder='Coupon code' />
        <Button type='button' buttonType='login'>
          Apply
        </Button>
      </form>
      <Button buttonType='checkout'>Checkout</Button>
    </div>
  );
};

export default Summary;
