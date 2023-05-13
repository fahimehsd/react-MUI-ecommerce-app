import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isCartOpen: false,
  cart: [],
  items: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    }
  }
});

export const { setItems } = cartSlice.actions;
export default cartSlice.reducer;
