import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : { items: [] };
};

const saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromStorage(),
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      saveCartToStorage(state);
    },
    removeItem(state, action) {
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => item._id !== idToRemove);
      saveCartToStorage(state);
    },
    increaseQuantity(state, action) {
      const idToIncrement = action.payload;
      const itemToIncrement = state.items.find(
        (item) => item._id === idToIncrement
      );
      if (itemToIncrement) {
        itemToIncrement.quantity++;
        saveCartToStorage(state);
      }
    },
    decreaseQuantity(state, action) {
      const idToDecrement = action.payload;
      const itemToDecrement = state.items.find(
        (item) => item._id === idToDecrement
      );
      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity--;
        saveCartToStorage(state);
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
