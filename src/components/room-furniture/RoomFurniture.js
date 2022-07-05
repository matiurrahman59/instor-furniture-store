import React from 'react';

import './RoomFurniture.scss';

const categories = [
  {
    id: 1,
    title: 'Living Room',
    imageUrl:
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&w=1000&q=80',
  },
  {
    id: 2,
    title: 'Bed Room',
    imageUrl:
      'https://media.designcafe.com/wp-content/uploads/2019/12/21000333/indian-bedroom-furniture-designs.jpg',
  },
  {
    id: 3,
    title: 'Dining Room',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dining-room-ideas-1252-005-1621977481.jpg?crop=0.655xw:1.00xh;0.120xw,0&resize=640:*',
  },
  {
    id: 4,
    title: 'office Room',
    imageUrl:
      'http://bokefurniture.com/wp-content/uploads/2020/09/604-%E6%A1%88%E4%BE%8B.png',
  },
];

const RoomFurniture = () => {
  return (
    <section className='RoomFurniture'>
      <h1 className='header-text'>Rooms</h1>
      <p className='sub-text'>Furniture for every corners in your home</p>.
    </section>
  );
};

export default RoomFurniture;
