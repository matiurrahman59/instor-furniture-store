import { Link } from 'react-router-dom';
import './Offer.scss';

const Offer = () => {
  return (
    <div
      className='sell-offer'
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
