import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Link, useParams } from 'react-router-dom';

// import { CategoriesContext } from '../../contexts/categories-context';

import categories from '../../categories';

import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg';

import ProductCard from '../../components/product-card/ProductCard';
import Offer from '../../components/sell-offer/Offer';
import Footer from '../../components/footer/Footer';

import './Product.scss';

const Product = () => {
  const { productItem } = useParams();

  const categoriesMap = useSelector((state) => state.category.categoriesMap);

  const [products, setProducts] = useState(categoriesMap[productItem]);

  useEffect(() => {
    setProducts(categoriesMap[productItem]);
  }, [productItem, categoriesMap]);

  let imageUrl;
  categories.map((category) => {
    if (productItem === category.title) {
      imageUrl = category.imageUrl;
    }
    return imageUrl;
  });

  return (
    <>
      <div className='container'>
        <div className='product-page-container'>
          <div
            className='product-page-header'
            style={{
              backgroundImage: `url(${imageUrl}})`,
            }}
          >
            <div className='product-page-body'>
              <Link to='/' className='link'>
                <LeftArrow fill='#fff' />
              </Link>
              <span className='header-title'>{productItem}</span>
            </div>
          </div>
          <div className='product-card-contianer'>
            {products &&
              products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </div>
          <Offer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
