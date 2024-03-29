import React from 'react';

// component
import categories from '../../categories';
import CategoryItem from '../category-item/CategoryItem';

// style
import './Category.scss';

const category = () => {
  return (
    <section className='category-container'>
      <h1 className='header-text'>Categories</h1>
      <div className='categories'>
        {categories.map((category) => {
          return <CategoryItem key={category.title} category={category} />;
        })}
      </div>
    </section>
  );
};

export default category;
