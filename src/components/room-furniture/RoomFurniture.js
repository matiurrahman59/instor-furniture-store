import React from 'react';

import { useNavigate } from 'react-router-dom';

import './RoomFurniture.scss';

const furnitures = [
  {
    id: 1,
    title: 'Living Room',
    imageUrl:
      'https://media.designcafe.com/wp-content/uploads/2019/12/17054440/living-room-furniture-design-for-your-home.jpg',
  },
  {
    id: 2,
    title: 'Bed Room',
    imageUrl:
      'https://s3.amazonaws.com/swatchpop-prod/blog-tmp/how-to-mix-match-bedroom-furniture/img2.jpg',
  },
  {
    id: 3,
    title: 'Dining Room',
    imageUrl:
      'https://empire-s3-production.bobvila.com/slides/29674/original/contemporary-dining-room-decorating-ideas.jpg?1546271328',
  },
  {
    id: 4,
    title: 'Office Room',
    imageUrl:
      'https://img.freepik.com/free-photo/contemporary-spacious-office-room-interior-with-city-view-daylight-workplace-design-concept-with-carpet-floor-office-furniture-meeting-room-living-area-reception-hall-white-3d-rendering_156429-3211.jpg?w=2000',
  },
];

const RoomFurniture = () => {
  const navigate = useNavigate();

  const navigateHandler = () => navigate('/product/chairs');

  return (
    <section className='room-furniture'>
      <h1 className='header-text'>Rooms</h1>
      <p className='sub-text'>Furniture for every corners in your home</p>
      <div className='furniture-container'>
        {furnitures.map(({ id, title, imageUrl }) => {
          const [title1, title2] = title.split(' ');

          return (
            <div
              key={id}
              className='furniture-type'
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
              onClick={navigateHandler}
            >
              <div className='title'>
                <span className='type-name'>{title1}</span> <br />
                <span className='type-name'>{title2}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RoomFurniture;
