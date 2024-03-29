import React from 'react';

// action
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart.slice';

// components
import { ReactComponent as AddToCartIcon } from '../../assets/icons/addtocart.svg';
import Button from '../button/Button';
import { toast } from 'react-toastify';

// style
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  const dispatch = useDispatch();
  const addProductToCart = () => {
    toast.success(`${name} was added to your cart`, {
      autoClose: 1500,
      hideProgressBar: true,
      position: 'top-center',
    });
    dispatch(cartActions.addItemToCart(product));
  };

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
