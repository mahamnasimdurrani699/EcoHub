import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
import ProductSlice from   "./ProductSlice";
const store = configureStore({
    reducer:{
        cart :Cartslice,
        product :ProductSlice,
    }
})
export default store;