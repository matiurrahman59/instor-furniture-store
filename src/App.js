import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Product from './routes/product/Product';
import CheckOut from './routes/checkout/CheckOut';
import { getCategoriesAndDocuments } from './utils/firebase/FirebaseUtils';
import { categoriesActions } from './store/categories.slice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(categoriesActions.replaceCategoriesMap(categoryMap));
      console.log(categoryMap);
    };
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='product/:productItem' element={<Product />} />
        <Route path='checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
