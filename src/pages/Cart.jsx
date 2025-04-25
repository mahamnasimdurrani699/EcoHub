import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import emptyCart from '../assets/Images/emptyCart.jpeg';
import { FaTrashAlt, FaWhatsapp } from 'react-icons/fa';
import Model from '../components/Model';
import Changeaddress from '../components/Changeaddress';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/Cartslice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const handleClick = () => {
    window.open( "https://wa.me/+92311223344"); // External link
  };
  const cart = useSelector((state) => state.cart);
  console.log(cart)
  const [address, setAddress] = useState('Lahore, Pakistan');
  const [isModelOpen,setIsModelOpen] =  useState(false)
  const navigate = useNavigate()
const dispatch= useDispatch()


// Calculate the actual total price
const calculateTotalPrice = () => {
  return cart.products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  
};
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-sm font-semibold">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                      </div>
                    </div>
                    <div className="flex space-x-12 items-center">
                      <p>Rs {product.price}</p>
                      <div className="flex items-center justify-center border">
                        <button className="text-xl font-bold px-1.5 border-r" onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                        <p className="text-xl px-1 border-1">{product.quantity}</p>
                        <button className="text-xl font-bold px-1.5 border-r" onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                      </div>
                      <p>Rs{(product.quantity * product.price).toFixed(2)}</p>
                      <button className="text-red-500 hover:text-red-700" onClick={()=> dispatch(removeFromCart(product.id))}>
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className=" font-semibold mb-5">Cart Total :</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className=" border-b pb-2  mb-5">
                <p className='font-semibold'>Shipping Details:</p>
               
                <p className="ml-2 mt-2 ">Shipping to :</p> 
                <span className="text-sm p-5 ">{ address}</span>
                <br/>
                <button className="text-blue-500 hover:underline mt-1 ml-2"
                onClick= { ()=> setIsModelOpen(true)}>
                  Change Address
                  </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                {/* Calculate the total price */}
                <span>Rs{calculateTotalPrice().toFixed(2)}</span>
              </div>

              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800"onClick={() =>  navigate('/checkout')}>
                Proceed to checkout
              </button>
            </div>
          </div>
          <Model   isModelOpen={isModelOpen}
            setIsModelOpen={setIsModelOpen}>
              <Changeaddress setAddress={setAddress } setIsModelOpen ={setIsModelOpen}/>
          </Model>

        </div>
      ) : (
        <div className="flex justify-center">
          <img src={emptyCart} alt="Empty cart" className="h-96" />
        </div>
      )}
        <div className="fixed bottom-4 right-4">
                  <div
                    onClick={handleClick}
                    className="flex items-center justify-center cursor-pointer hover:scale-110 "
                  >
                    <FaWhatsapp className="text-green-500 w-12 h-12 hover:text-green-700 "></FaWhatsapp>
                  
                  </div>
                  </div>
    </div>
  );
};
export default Cart;
