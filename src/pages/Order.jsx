// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Order = ({ order }) => {
//   if (!order) {
//     return <p>No order found. Please try again.</p>;
//   }

//   const calculateTotalPrice = () => {
//     return order.products.reduce(
//       (total, product) => total + product.price * product.quantity,
//       0
//     );
//   };
//   const navigate = useNavigate();

//   return (
//     <div className="container mx-auto py-8 bg-slate-100 w-120 p-4">
//       <h2 className="text-2xl font-semibold mb-4">Thank you for your purchase!</h2>
//       <p>Your order has been placed successfully.</p>
//       <h3 className="mt-4 text-lg font-semibold">Order Summary</h3>
//       <p>Order Number: {order.orderNumber}</p>
//       <p className='text-md font-semibold border border-black w-80'>Total Price: Rs{order.totalPrice ? order.totalPrice.toFixed(2) : calculateTotalPrice().toFixed(2)}</p>
//       <ul>
//         {order.products.map((product) => (
//           <li key={product.id}>{product.name} - Rs{product.price} x {product.quantity}</li>
//         ))}
//       </ul>
//       <div>
//         <h3  className="text-md font-semibold mt-2 mb-2">Shipping Information</h3>
//         <p> address :{order.shippingInformation.address}</p>
//         <p> city :{order.shippingInformation.city}</p>
//         <p> zip code:{order.shippingInformation.zip}</p>
     
//       </div>
//       <button 
//   className="mt-4 px-3 py-2 bg-gray-500 text-white hover:bg-gray-800"
//   onClick={() => window.open("https://wa.me/+92311223344?text=Hi there ,I want to track my order", "_blank")}
// >
//   Track Order
// </button>

//       <button  className="mt-4  ml-4 px-3  py-2 bg-gray-500 text-white hover:bg-gray-800 " onClick={()=>navigate('/')}
//            > Continue Shopping</button>
//     </div>
//   );
// };

// export default Order;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Order = ({ order }) => {
  if (!order) {
    return <p>No order found. Please try again.</p>;
  }

  const calculateTotalPrice = () => {
    return order.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const navigate = useNavigate();

  const handleContinueShopping = () => {
    toast.success("Shopping continued successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

    setTimeout(() => navigate('/'), 1000);
  };

  return (
    <div className="container mx-auto py-8 bg-slate-100 w-120 p-4">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your purchase!</h2>
      <p>Your order has been placed successfully.</p>
      <h3 className="mt-4 text-lg font-semibold">Order Summary</h3>
      <p>Order Number: {order.orderNumber}</p>
      <p className='text-md font-semibold border border-black w-80'>
        Total Price: Rs{order.totalPrice ? order.totalPrice.toFixed(2) : calculateTotalPrice().toFixed(2)}
      </p>
      <ul>
        {order.products.map((product) => (
          <li key={product.id}>
            {product.name} - Rs{product.price} x {product.quantity}
          </li>
        ))}
      </ul>
      <div>
        <h3 className="text-md font-semibold mt-2 mb-2">Shipping Information</h3>
        <p>Address: {order.shippingInformation.address}</p>
        <p>City: {order.shippingInformation.city}</p>
        <p>Zip Code: {order.shippingInformation.zip}</p>
      </div>

      <button 
        className="mt-4 px-3 py-2 bg-gray-500 text-white hover:bg-gray-800"
        onClick={() => window.open("https://wa.me/+92311223344?text=Hi there ,I want to track my order", "_blank")}
      >
        Track Order
      </button>

      <button 
        className="mt-4 ml-4 px-3 py-2 bg-gray-500 text-white hover:bg-gray-800" 
        onClick={handleContinueShopping}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default Order;
