import { createSlice } from "@reduxjs/toolkit";
import { food } from "../assets/mockData"; 
import { PersonalCare } from "../assets/PersonalCare";
import { houseproducts } from "../assets/houseproducts";
import { furniture } from "../assets/mockFurniture";
import { mockData } from "../assets/mockData";

// Combine both arrays if they exist
const initialProducts = [
  ...((food && Array.isArray(food)) ? food : []),
  ...((PersonalCare && Array.isArray(PersonalCare)) ? PersonalCare : []),
  ...((houseproducts && Array.isArray(houseproducts)) ? houseproducts : []),
  ...((furniture && Array.isArray(furniture)) ? furniture : []),
  ...((mockData && Array.isArray(mockData)) ? mockData : []),

];

const initialState = {
  products: initialProducts,       // Combined products
  searchTerm: "",
  filteredData: initialProducts,   // Initialize filtered data with all products
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Action to update products
    setProducts: (state, action) => ({
      ...state,
      products: action.payload,
      filteredData: action.payload, // Reset filtered data when updating products
    }),
    // Action to set the search term and filter products
    setSearchTerm: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      return {
        ...state,
        searchTerm,
        filteredData: state.products.filter(
          (product) =>
            product.name && product.name.toLowerCase().includes(searchTerm)
        ),
      };
    },
  },
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
