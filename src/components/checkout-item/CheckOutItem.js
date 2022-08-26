import React from 'react';

import { useDispatch } from 'react-redux';

import { ReactComponent as RemoveToCart } from '../../assets/icons/subtract.svg';
import { ReactComponent as AddToCart } from '../../assets/icons/addtocart.svg';
import { ReactComponent as Remove } from '../../assets/icons/remove.svg';

import './CheckOutItem.scss';
import { cartActions } from '../../store/cart.slice';

const CheckOutItem = ({ cartItem }) => {
  const { id, name, imageUrl, price, code, quantity } = cartItem;

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(cartActions.addItemToCart(cartItem));
  };
  const removeItem = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const deleteItemFromCart = () => {
    dispatch(cartActions.clearItemFromCart(cartItem));
  };

  // const { addItemToCart, removeItemFromCart, clearItemFromCart } =
  //   useContext(CartContext);

  // const deleteItemFromCart = () => clearItemFromCart(cartItem);
  // const addItem = () => addItemToCart(cartItem);
  // const removeItem = () => removeItemFromCart(cartItem);

  return (
    <div className='cart-item'>
      <div
        className='item-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'noRepeat',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className='item-details'>
        <div className='row-1'>
          <div className='text'>
            <span className='item-name'>{name}</span>
            <span className='item-code'>{code}</span>
          </div>
          <span className='item-action' onClick={deleteItemFromCart}>
            <Remove fill='Black' />
          </span>
        </div>

        <div className='row-2'>
          <div className='item-quantity'>
            <span className='counter' onClick={removeItem}>
              <RemoveToCart fill='Black' />
            </span>
            <span className='quantity'>{quantity}</span>
            <span className='counter' onClick={addItem}>
              <AddToCart fill='Black' />
            </span>
          </div>
          <span className='item-price'>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckOutItem;
