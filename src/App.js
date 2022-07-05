import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/Navigation';
import Home from './routes/home/Home';
import Product from './routes/product/Product';
import CheckOut from './routes/checkout/CheckOut';
// import LogIn from './components/modal/LogIn';
// import SignUp from './components/modal/SignUp';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        {/* <Route path='/sign-in' element={<LogIn />} />
        <Route index element={<SignUp />} /> */}
        <Route path='product/:productItem' element={<Product />} />
        <Route path='checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
