import React from 'react';
import CategoryItem from '../category-item/CategoryItem';

import './Category.scss';

const categories = [
  {
    id: 1,
    title: 'chairs',
    imageUrl:
      'https://images.pexels.com/photos/8453807/pexels-photo-8453807.jpeg?cs=srgb&dl=pexels-cottonbro-8453807.jpg&fm=jpg',
    route: 'product/chairs',
  },
  {
    id: 2,
    title: 'sofas',
    imageUrl:
      'https://www.ikea.com/in/en/images/products/friheten-corner-sofa-bed-with-storage-skiftebo-dark-grey__0779005_ph163058_s5.jpg?f=s',
    route: 'product/sofas',
  },
  {
    id: 3,
    title: 'desks',
    imageUrl:
      'https://i.pinimg.com/736x/dc/d3/38/dcd338d735a1597c74fbbf5e95667986.jpg',
    route: 'product/desks',
  },
];

const category = () => {
  return (
    <section className='category-container'>
      <h1 className='header-text'>Categories</h1>
      <div className='categories'>
        {categories.map((category) => {
          return <CategoryItem key={category.id} category={category} />;
        })}
      </div>
    </section>
  );
};

export default category;
