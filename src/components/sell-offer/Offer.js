import { Link } from 'react-router-dom';
import './Offer.scss';

const Offer = () => {
  return (
    <div
      className='sell-offer'
      // style={{
      //   backgroundImage: `url(https://pyxis.nymag.com/v1/imgs/146/f95/2c3cb7efc329eb088d6017af39c04e68d5.jpg)`,
      // }}
      style={{
        backgroundImage: `url(https://cdn4.vectorstock.com/i/1000x1000/27/03/simple-living-room-interior-with-gray-sofa-vector-26962703.jpg)`,
      }}
    >
      <div className='offer-text'>
        <span className='offer-title'>Sale</span>
        <span>All chairs up to</span>
        <span className='offer-amount'>50% off</span>
        <Link to='/'>Learn more &rarr;</Link>
      </div>
    </div>
  );
};

export default Offer;
