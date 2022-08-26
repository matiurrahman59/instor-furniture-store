import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import CheckOutItem from '../../components/checkout-item/CheckOutItem';
import Summary from '../../components/item-summary/Summary';
import { ReactComponent as CartIcon } from '../../assets/icons/cart-regular.svg';

import './CheckOut.scss';
import SimilarProduct from '../../components/similar-product/similar-product';
import Footer from '../../components/footer/Footer';
import Modal from '../../components/modal/modal';

const CheckOut = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const [isModalopen, setIsmodalopen] = useState(false);

  const setModalactive = () => {
    setIsmodalopen(true);
  };
  const setModaloff = () => {
    setIsmodalopen(false);
  };

  return (
    <>
      <div className='container'>
        <div className='checkout-container'>
          <div className='checkout-items-container'>
            {!cartItems.length && (
              <div className='empty-cart-container'>
                <CartIcon fill='#000' height='46px' width='46px' />
                <span className='header-text'>Cart is Empty</span>
                <span className='sub-text'>
                  Looks like you haven't added <br /> anything to your cart yet{' '}
                </span>
                <Link to='/' className='navigate'>
                  Back to Homepage
                </Link>
              </div>
            )}
            {cartItems.map((cartItem) => (
              <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <Summary setModalactive={setModalactive} />
        </div>
        <SimilarProduct />
        {isModalopen && <Modal setModaloff={setModaloff} />}
      </div>
      <Footer />
    </>
  );
};

export default CheckOut;
