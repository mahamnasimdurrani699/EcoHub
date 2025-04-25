import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ProductsCards from '../components/ProductsCards';
import Whatsapp_icon from '../components/Whatsapp_icon';

const Shop = () => {
  // Get the combined products array from Redux state
  const productsData = useSelector((state) => state.product.products);

  // Use useMemo to compute random products whenever productsData changes.
  // This prevents re-computation on every render.
  const randomProducts = useMemo(() => {
    if (!productsData || productsData.length === 0) return [];
    // Shuffle the products array randomly
    const shuffled = [...productsData].sort(() => 0.5 - Math.random());
    // Return the first 10 products from the shuffled list
    return shuffled.slice(0, 10);
  }, [productsData]);

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-4 text-center">Shop Now</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {productsData && productsData.length > 0 ? (
          randomProducts.map((product, index) => (
            <ProductsCards key={product.id || index} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">Loading products...</p>
        )}
      </div>

      <Whatsapp_icon />
    </div>
  );
};

export default Shop;
