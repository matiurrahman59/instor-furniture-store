import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// action
import { cartActions } from '../../store/cart.slice';

// component
import Button from '../button/Button';

// style
import './Summary.scss';

const Summary = ({ setModalactive }) => {
  const cartTotal = useSelector((state) => state.cart.totalPrice);
  const dCharge = cartTotal > 0 ? 10 : 0;
  const totalPrice = cartTotal + dCharge;

  const dispatch = useDispatch();

  const emptyCart = () => {
    dispatch(cartActions.cartClear());
  };

  const confirmCheckout = (e) => {
    e.preventDefault();
    setModalactive();
    emptyCart();
  };

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
      <form onSubmit={confirmCheckout}>
        <div className='coupon-form'>
          <input type='text' placeholder='Coupon code' />
          <Button type='button' buttonType='login'>
            Apply
          </Button>
        </div>
        {cartTotal === 0 ? (
          <Button
            buttonType='checkout'
            style={{
              width: '100%',
              marginTop: '20px',
              opacity: '0.4',
              cursor: 'not-allowed',
            }}
            disabled
          >
            Checkout
          </Button>
        ) : (
          <Button
            type='submit'
            buttonType='checkout'
            style={{ width: '100%', marginTop: '20px' }}
          >
            Checkout
          </Button>
        )}
      </form>
    </div>
  );
};

export default Summary;
