import React, { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';
import Button from '../button/Button';

import './Summary.scss';

const Summary = ({ price }) => {
  const { cartTotal } = useContext(CartContext);
  const dCharge = 10;
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
