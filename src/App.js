import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Product from './routes/product/Product';
import CheckOut from './routes/checkout/CheckOut';
import {
  createUserDocumentFromAuth,
  getCategoriesAndDocuments,
  onAuthStateChangedListener,
} from './utils/firebase/FirebaseUtils';
import { categoriesActions } from './store/categories.slice';
import { userActions } from './store/user.slice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(categoriesActions.replaceCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(userActions.signUp(user));
    });
    return unsubscribe;
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
