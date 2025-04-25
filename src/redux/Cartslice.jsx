import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0
 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Reducer to add items to the cart
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }

      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },

    // Reducer to remove items from the cart
    removeFromCart(state, action) {
      const id = action.payload; // Extract the ID of the item to remove
      const findItem = state.products.find((item) => item.id === id);

      if (findItem) {
        // Update total price and quantity
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;

        // Remove the product from the array
        state.products = state.products.filter((item) => item.id !== id);
      }
    },

    // Reducer to increase the quantity of an item
    increaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity++;
        state.totalPrice += findItem.price;
      }
    },

    // Reducer to decrease the quantity of an item
    decreaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if(findItem.quantity>1)
      if (findItem ) {

        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
        state.totalQuantity--;
        state.totalPrice -= findItem.price;

        
      }
    },
  },
});

// Export the actions and reducer
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
