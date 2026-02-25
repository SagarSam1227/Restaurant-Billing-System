import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartState, ProductProps } from "../types/data";
import type { RootState } from "./store";

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ✅ Add to Cart
    addToCart(state, action: PayloadAction<ProductProps>) {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.product.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          product: newItem,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }

      state.totalAmount += newItem.price;
    },

    // ✅ Remove Entire Product From Cart
    removeFromCart(state, action: PayloadAction<number>) {
      const id = action.payload;

      const existingItem = state.items.find(
        (item) => item.product.id === id
      );

      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalAmount -=
        existingItem.product.price * existingItem.quantity;

      state.items = state.items.filter(
        (item) => item.product.id !== id
      );
    },

    // ✅ Increase Quantity
    increaseQuantity(state, action: PayloadAction<number>) {
      const id = action.payload;

      const item = state.items.find(
        (item) => item.product.id === id
      );

      if (item) {
        item.quantity++;
        state.totalQuantity++;
        state.totalAmount += item.product.price;
      }
    },

    // ✅ Decrease Quantity
    decreaseQuantity(state, action: PayloadAction<number>) {
      const id = action.payload;

      const item = state.items.find(
        (item) => item.product.id === id
      );

      if (!item) return;

      item.quantity--;
      state.totalQuantity--;
      state.totalAmount -= item.product.price;

      if (item.quantity === 0) {
        state.items = state.items.filter(
          (item) => item.product.id !== id
        );
      }
    },

    // ✅ Clear Cart
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});


// ✅ Selector – Get Quantity of Specific Product
export const selectItemCount = (
  state: RootState,
  id: number
): number => {
  const item = state.cart.items.find(
    (item: { product: { id: number } }) => item.product.id === id
  );

  return item ? item.quantity : 0;
};


// ✅ Export Actions
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;