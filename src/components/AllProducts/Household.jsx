import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import ProductsCards from "../ProductsCards";
import Whatsapp_icon from "../Whatsapp_icon";
import { houseproducts } from "../../assets/houseproducts";

const Household = () => {
  const location = useLocation(); // Get current route
  const navigate = useNavigate(); // React Router navigation
  const [showAll, setShowAll] = useState(false);

  // Automatically expand if user navigates to /Household
  useEffect(() => {
    if (location.pathname === "/Household") {
      setShowAll(true);
    }
  }, [location]);

  
  const displayedProducts = showAll ? houseproducts : houseproducts.slice(0, 5);

  return (
    <div className="container mx-auto py-9">
      <h2 className="text-2xl font-bold mb-4 text-center text-secondary">
      Household Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-6">
        {displayedProducts.map((item) => (
          <ProductsCards key={item.id} product={item} />
        ))}
      </div>

      {/* View More Button */}
      {houseproducts.length > 5 && !showAll && location.pathname !== "/Household" && (
        <div className="text-center mt-4">
          <button
            className="text-lg font-medium hover:bg-gradient-to-r from-accent border border-primary p-2 transition-all duration-300"
            onClick={() => navigate("/Household")} // Use navigate() instead of window.location.href
          >
            View More
          </button>
        </div>
      )}

      <Whatsapp_icon />
    </div>
  );
};

export default Household;
