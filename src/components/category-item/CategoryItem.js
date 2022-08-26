import React from 'react';
import { useNavigate } from 'react-router-dom';

// style
import './CategoryItem.scss';

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <div
      onClick={onNavigateHandler}
      className='category__item'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <span className='category__item-name'>{title}</span>
    </div>
  );
};

export default CategoryItem;
