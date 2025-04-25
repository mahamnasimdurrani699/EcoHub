// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { addToCart } from "../redux/Cartslice";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

// const ProductsCards = ({ product }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = (e, product) => {
//     e.stopPropagation();
//     e.preventDefault();
//     dispatch(addToCart(product));
//     alert("Product added successfully!");
//   };

//   return (
//     <Link to={`/product/${product.id}`}>
//       <div className="bg-white p-4 shadow-lg rounded-lg relative border transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
//         {/* Product Image */}
//         <img
//           src={product.image }
//           alt={product.name }
//           className="w-full h-48 object-contain mb-4 transition-transform duration-300 transform hover:scale-110"
//         />

//         {/* Product Name */}
//         <h3 className="text-lg font-semibold text-secondary">
//           {product.name || "Unnamed Product"}
//         </h3>

//         {/* Product Price */}
//         <p className="text-gray-600">Rs {product.price || "N/A"}</p>

//         {/* Product Rating */}
//         <div className="flex items-center mt-2">
//           {Array.from({ length: 5 }).map((_, index) => (
//             <FaStar
//               key={index}
//               className={index < (product.rating || 4) ? "text-yellow-500" : "text-yellow-200"}
//             />
            
//           ))}
//         </div>

//         {/* Add to Cart Button */}
//         <div
//           className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-accent group text-white text-sm rounded-full hover:w-32 hover:bg-darkAccent transition-all duration-200 cursor-pointer"
//           onClick={(e) => handleAddToCart(e, product)}
//         >
//           <span className="group-hover:hidden">+</span>
//           <span className="hidden group-hover:block">Add to cart</span>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ProductsCards;
import React from "react";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/Cartslice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

const ProductsCards = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));

    
    toast.success(" Product added to cart!", {
      position: "top-right",
      autoClose: 2000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      className:"bg-gradient-to-r from-accent border border-primary"
    });
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white p-4 shadow-lg rounded-lg relative border transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mb-4 transition-transform duration-300 transform hover:scale-110"
        />

        <h3 className="text-lg font-semibold text-secondary">
          {product.name || "Unnamed Product"}
        </h3>

        <p className="text-gray-600">Rs {product.price || "N/A"}</p>

        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar
              key={index}
              className={index < (product.rating || 4) ? "text-yellow-500" : "text-yellow-200"}
            />
          ))}
        </div>

        {/* Add to Cart Button */}
        <div
          className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-accent group text-white text-sm rounded-full hover:w-32 hover:bg-darkAccent transition-all duration-200 cursor-pointer"
          onClick={(e) => handleAddToCart(e, product)}
        >
          <span className="group-hover:hidden">+</span>
          <span className="hidden group-hover:block">Add to cart</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductsCards;
