import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Model from './Model';
import Register from './Register';
import Login from './Login';
import { setSearchTerm } from '../redux/ProductSlice';

const Navbar = () => {
  const products = useSelector(state => state.cart.products);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate('/filterData');
  };

  const openSignup = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  return (
    <nav className="bg-gradient-to-r from-accent to-primary shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-12 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="text-secondary hover:text-hoverLink transition-all duration-300">EcoHub</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 px-4 text-secondary bg-lightBackground border-none focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-2 right-3 text-accent" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl text-secondary hover:text-darkAccent transition-all duration-300" />
            {products.length > 0 && (
              <span className="absolute top-0 left-3 bg-cartBadge text-xs text-white rounded-full flex items-center justify-center w-4 h-4">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block text-secondary hover:text-hoverLink transition-all duration-300"
            onClick={() => setIsModelOpen(true)}
          >
            Login | Signup
          </button>
          <button
            className="block md:hidden text-secondary hover:text-hoverLink transition-all duration-300"
            onClick={() => setIsModelOpen(true)}
          >
            <FaUser aria-label="User" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-6 py-4 text-sm font-bold text-secondary">
        <Link to="/" className="hover:text-darkAccent transition-all duration-300">Home</Link>
        <Link to="/Shop" className="hover:text-darkAccent transition-all duration-300">Shop</Link>
        <Link to="/contact" className="hover:text-darkAccent transition-all duration-300">Contact Us</Link>
        <Link to="/AboutPage" className="hover:text-darkAccent transition-all duration-300">About Us</Link>
      </div>
      {/* <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? <Login openSignup={openSignup} /> : <Register openLogin={openLogin} />}
      </Model> */}
      <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
      {isLogin ? <Login openSignUp={openSignup} /> : <Register openLogin={openLogin} />}
      </Model>

    </nav>
  );
};

export default Navbar;
