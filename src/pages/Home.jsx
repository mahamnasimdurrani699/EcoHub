
import React, { useEffect } from "react";
import { categories, mockData } from "../assets/mockData";
import CardsInfo from "../components/CardsInfo";
import CategoriesSection from "../components/CategoriesSection";
import { setProducts } from "../redux/ProductSlice";
import { useSelector, useDispatch } from "react-redux";
import ProductsCards from "../components/ProductsCards";
import Shop from "./Shop";
import Carousel from '../components/Carousel';
import BlogSection from "../components/BlogSection";
import Food from "../components/AllProducts/Food";
import SelfCare from "../components/AllProducts/SelfCare";
import Whatsapp_icon from "../components/Whatsapp_icon";
import Household from "../components/AllProducts/Household";
import axios from "axios";
import BestProducts from "../components/AllProducts/BestProducts";




const Home = () => {
  // const dispatch = useDispatch();
  // const products = useSelector(state => state.product);

  // useEffect(() => {
  //   dispatch(setProducts(mockData));
  // }, [dispatch]);

  // const dispatch = useDispatch()
  const dispatch = useDispatch();

  const products = useSelector(state => state.product)
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    dispatch(setProducts(mockData))
    axios.get("http://localhost:4001/home")
    .then(result => {console.log(result)
      if(result.data !== "success"){
        // openLogin();
      }
    })
    .catch(err => console.log(err))
  },[dispatch]);

 

  return (
    <div className="bg-lightBackground">
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
          {/* Categories Section */}
          <div className="w-full md:w-3/12">
            <div className="bg-accent text-secondary text-xs font-semibold px-2 py-2.5">
              SHOP BY CATEGORIES
            </div>
            <ul className="space-y-4 bg-gray-300 p-3 border">
              {categories.map((category, index) => (
                <li key={index} className="flex items-center text-sm font-medium">
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Carousel Section - Adjusted width to be next to categories */}
          <div className="w-full md:w-9/12">
            <Carousel />
          </div>
        </div>

        <CardsInfo />
        <CategoriesSection />
        <div className="container mx-auto py-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-6 cursor-pointer">
           </div>
         </div>
        <BestProducts/>
        
        
      </div>
      <Food/>
      <SelfCare/>
      <BlogSection />
      <Household/>
      <Shop />
     <Whatsapp_icon/>
    </div>
  );
};

export default Home;