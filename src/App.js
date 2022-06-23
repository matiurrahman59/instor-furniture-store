import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Product from './routes/product/Product';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='product/:productItem' element={<Product />} />
      </Route>
    </Routes>
  );
};

export default App;
