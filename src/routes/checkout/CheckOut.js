import React, { useContext } from 'react';
import CheckOutItem from '../../components/checkout-item/CheckOutItem';

import { CartContext } from '../../contexts/cart-context';

import './CheckOut.scss';

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CheckOut;
