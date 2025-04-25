import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import FilterData from './pages/FilterData';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import Food from './components/AllProducts/Food';
import SelfCare from './components/AllProducts/SelfCare';
import Furniture from './components/AllProducts/Furniture';
import Scroll_to_top from './assets/Scroll_to_top';
import Household from './components/AllProducts/Household';
import { ToastContainer } from 'react-toastify';
import Contact from './pages/Contact';
import BestProducts from './components/AllProducts/BestProducts';



const App = () => {
  const [order, setOrder] = useState(null);

  return (
    <BrowserRouter>
    <ToastContainer autoClose={3000} />
    <Scroll_to_top/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
        <Route path="/order-confirmation" element={<Order order={order} />} />
        <Route path="/filterData" element={<FilterData/>} />
        <Route path="/product/:id" element={<DetailPage/>} />
        <Route path="/blog2" element={<Blog2/>} />
        <Route path="/blog3" element={<Blog3/>} />
        <Route path="/Food" element={<Food/>} />
        <Route path='/food/:id' element={<DetailPage/>}></Route>
        <Route path="/SelfCare" element={<SelfCare/>} />
        <Route path='/PersonalCare/:id' element={<DetailPage/>}></Route>
        <Route path="/household" element={<Household/>} />
        <Route path='/furniture' element={<Furniture/>}/>
        <Route path='/BestProducts' element={<BestProducts/>}/>
        <Route path="/houseproducts/:id" element={<DetailPage/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
       



      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
