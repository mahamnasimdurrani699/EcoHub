import React from 'react';
import { FaHeadset, FaShippingFast, FaMoneyBillWave, FaTag, FaLock } from 'react-icons/fa';

const CardsInfo = () => {
  const Itemsinfo = [
    {
      icon: <FaShippingFast className="text-4xl text-accent" />,  // Updated color
      title: 'Free shipping',
      description: 'Get your products with no delivery charges',
    },
    {
      icon: <FaHeadset className="text-4xl text-accent" />,  // Updated color
      title: 'Support 24/7',
      description: 'We are here to assist you at any time',
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-accent" />,  // Updated color
      title: '100% money back',
      description: 'Fully refunded if you are not satisfied',
    },
    {
      icon: <FaTag className="text-4xl text-accent" />,  // Updated color
      title: 'Discount',
      description: 'Avail most awaited discounts on your favourite products',
    },
    {
      icon: <FaLock className="text-4xl text-accent" />,  // Updated color
      title: 'Ensure Secure Payment',
      description: 'Your payment should be secure',
    },
  ];

  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {Itemsinfo.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            {item.icon}
            <h2 className="mt-4 font-semibold text-xl text-secondary">{item.title}</h2>  {/* Updated title color */}
            <p className="mt-2 text-gray-700">{item.description}</p>  {/* Updated description color */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsInfo;
