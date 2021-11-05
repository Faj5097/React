import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  isVisible: true,
  items: [{ title: "Test Item", quantity: 3, total: 18, price: 6 }],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );

      if (itemIndex >= 0) {
        state.items[itemIndex] = {
          ...state.items[itemIndex],
          quantity: state.items[itemIndex].quantity + 1,
          total: state.items[itemIndex].total + state.items[itemIndex].price,
        };
      } else {
        state.items.push({
          title: action.payload.title,
          quantity: 1,
          total: action.payload.price,
          price: action.payload.price,
        });
      }
    },
    deleteItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );

      if (state.items[itemIndex].quantity > 1) {
        state.items[itemIndex] = {
          ...state.items[itemIndex],
          quantity: state.items[itemIndex].quantity - 1,
          total: state.items[itemIndex].total - state.items[itemIndex].price,
        };
      } else {
        state.items.splice(itemIndex, 1);
      }
    },
    toggleCart(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { addItem, deleteItem, toggleCart } = cartSlice.actions;

export default cartSlice.reducer;
