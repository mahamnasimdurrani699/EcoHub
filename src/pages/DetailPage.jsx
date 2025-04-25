import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { addToCart } from '../redux/Cartslice';
const DetailPage = () => {
    const { id } = useParams();
    const products = useSelector(state => state.product.products); // **_Get products from Redux store_**
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
useEffect(() => {
    
    const foundProduct = products.find(product => product.id === parseInt(id));
    setProduct(foundProduct);
   
}, [id, products]);


    if (!product) {
        return <div className="text-center text-xl">Product not found</div>;
    }

    // Handle adding to the cart
    const handleAddToCart = () => {
        dispatch(addToCart(product)); // Add the product to the cart
        alert(`${product.name} has been added to your cart!`); // Display alert
    };
// Shuffle function to get random unique products
const getRandomProducts = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffled.slice(0, num); // Get 'num' random items
};

// Filter recommended products based on the same category
const recommendedProducts = getRandomProducts(
    products.filter((prod) => prod.id !== product.id && prod.category === product.category), 
    4
);

    return (
        <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
            <div className="flex flex-col md:flex-row gap-x-16">
                {/* Product Image */}
                <div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
                    <img src={product.image} alt={product.name} className="h-full object-cover rounded-lg" />
                </div>

                {/* Product Information */}
                <div className="md:w-1/2 py-4 space-y-4">
                    <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
                    <p className="text-base text-gray-600">{product.description}</p>
                    <p className="text-xl text-black font-semibold">Rs{product.price}</p>

                    <div className="mt-6 flex gap-4">
                        <button
                            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <hr className="border-t-2 border-gray-800 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto" />
                <p className="text-base text-gray-600">{product.info}</p>

            </div>

            {/* Recommended Products */}
            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recommended Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {recommendedProducts.length > 0 ? (
                        recommendedProducts.map((recommendedProduct) => (
                            <Link
                                key={recommendedProduct.id}
                                to={`/product/${recommendedProduct.id}`} // Link to product detail page
                                className="shadow-md rounded-lg overflow-hidden group"
                            >
                                <img
                                    src={recommendedProduct.image}
                                    alt={recommendedProduct.name}
                                    className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
                                />
                                <div className="p-4">
                                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-green-600">{recommendedProduct.name}</h4>
                                    <p className="text-gray-500">{recommendedProduct.shortDescription}</p>
                                    <p className="text-green-600 font-semibold">Rs{recommendedProduct.price}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>No recommended products available at the moment.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailPage;
