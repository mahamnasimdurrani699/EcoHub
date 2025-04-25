import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import ProductsCards from "../ProductsCards";
import Whatsapp_icon from "../Whatsapp_icon";
import { food } from "../../assets/mockData";

const Food = () => {
  const location = useLocation(); // Get current route
  const [showAll, setShowAll] = useState(false);

  // Automatically expand if user navigates to /food
  useEffect(() => {
    if (location.pathname === "/food") {
      setShowAll(true);
    }
  }, [location]);

  const displayedProducts = showAll ? food : food.slice(0, 5);

  return (
    <div className="container mx-auto py-9">
      <h2 className="text-2xl font-bold mb-4 text-center text-secondary">
        Food Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-6">
        {displayedProducts.map((item) => (
          <ProductsCards key={item.id} product={item} />
        ))}
      </div>

      {/* View More / View Less Button */}
      {food.length > 5 && !showAll && location.pathname !== "/food" && (
        <div className="text-center mt-4">
          <button
            className="text-lg  font-medium hover:bg-gradient-to-r from-accent border border-primary p-2  transition-all duration-300
           " onClick={() => (window.location.href = "/food")} // Navigate to /food
          >
            View More
          </button>
        </div>
      )}

      <Whatsapp_icon />
    </div>
  );
};

export default Food;
