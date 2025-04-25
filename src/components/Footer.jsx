import React from "react";
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center mt-6">
        <Link to="/" className="text-lg  font-medium hover:bg-gradient-to-r from-accent border border-primary p-2  transition-all duration-300">
          Back to home
        </Link>
      </div>
    <footer className="bg-gradient-to-r from-accent to-primary text-lightText py-8 px-4 md:px-16 lg:px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">EcoHub</h3>
          <p className="mt-4">
            Sustainable Products for all. Shop from us for a better or eco-friendly lifestyle.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="hover:text-darkAccent hover:scale-105 transition-all duration-300">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-darkAccent hover:scale-105 transition-all duration-300">Shop</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-darkAccent hover:scale-105 transition-all duration-300">Contact</Link>
            </li>
            <li>
              <Link to="/AboutPage" className="hover:text-darkAccent hover:scale-105 transition-all duration-300">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow us on</h4>
          <div className="flex space-x-4 mt-4">
            <a href="" className="hover:text-darkAccent hover:scale-105 transition-all duration-300"><FaFacebook /></a>
            <a href="" className="hover:text-darkAccent hover:scale-105 transition-all duration-300"><FaInstagram /></a>
            <a href="" className="hover:text-darkAccent hover:scale-105 transition-all duration-300"><FaTwitter /></a>
            <a href="" className="hover:text-darkAccent hover:scale-105 transition-all duration-300"><FaLinkedin /></a>
          </div>
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter an email"
              className="w-full p-2 rounded-l-lg bg-white text-secondary border border-gray-600"
            />
            <button className="bg-accent text-white px-4 py-2 rounded-r-lg border border-gray-600 hover:bg-darkAccent transition-all duration-300 transform hover:scale-105">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 EcoHub All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="" className="hover:underline text-darkAccent hover:scale-105 transition-all duration-300">Privacy Policy</a>
            <a href="" className="hover:underline text-darkAccent hover:scale-105 transition-all duration-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
