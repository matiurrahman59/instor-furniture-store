import React, { useContext } from 'react';

// import { CartContext } from '../../contexts/cart-context';
import Button from '../button/Button';

import './Summary.scss';

const Summary = ({ price }) => {
  // const { price } = useContext(CartContext);

  return (
    <div className='item-summary-container'>
      <h1>Summary</h1>
      <div className='product-cost'>
        <span>Products</span>
        <span>{price}</span>
      </div>
      <div className='delevery-cost'>
        <span>Delivery</span>
        <span>$5</span>
      </div>
      <div className='total-cost'>
        <span>Total</span>
        <span>{price}</span>
      </div>
      <form className='coupon-form'>
        <input type='text' placeholder='Coupon code' />
        <Button>Apply</Button>
      </form>
      <Button>Checkout</Button>
    </div>
  );
};

export default Summary;
