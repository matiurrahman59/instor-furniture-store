import React from 'react';
import Button from '../button/Button';

// style
import './modal.scss';

// component
import correctImage from '../../assets/icons/correct.png';

const Modal = ({ setModaloff }) => {
  return (
    <div className='modal' onClick={() => setModaloff()}>
      <div className='modal__body'>
        <img src={correctImage} alt='correct' />
        <h1>Order Placed</h1>
        order number: 123456
        <Button
          className='button-container login'
          onClick={() => setModaloff()}
        >
          ok
        </Button>
      </div>
    </div>
  );
};

export default Modal;
