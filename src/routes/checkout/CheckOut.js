import React, { useContext, useState } from 'react';
import CheckOutItem from '../../components/checkout-item/CheckOutItem';

import { CartContext } from '../../contexts/cart-context';

import Summary from '../../components/item-summary/Summary';

import './CheckOut.scss';

const CheckOut = () => {
  const [itemAdded, setItemAdded] = useState(false);
  const { cartItems } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-items-container'>
        {!itemAdded && <p>No item added</p>}
        {cartItems.map((cartItem) => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Summary />
    </div>
  );
};

export default CheckOut;
