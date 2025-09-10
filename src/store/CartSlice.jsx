import { createSlice } from '@reduxjs/toolkit';
import { slugify } from '../common/utils/string';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalCost: 0,
    isOpen: false,
    ids: [],
    items: [],
  },
  reducers: {

    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },


    addItem: (state, action) => {

      const item = action.payload;
      const id = slugify(item.name);

      if (state.ids.includes(id)) return;

      const amount = Number(item.cost.replace('$', ''));

      state.ids.push(id);
      state.items.push({ ...item, id, quantity: 1, amount, totalCost: amount });

      state.totalCost = state.items.reduce((total, item) => total + item.totalCost, 0);

    },
    removeItem: (state, action) => {
      const item = action.payload;
      const id = slugify(item.name);
      if (!state.ids.includes(id)) return;

      state.ids = state.ids.filter(itemId => itemId !== id);
      state.items = state.items.filter(i => i.id !== id);
      state.totalCost = state.items.reduce((total, item) => total + item.totalCost, 0);

    },
    updateQuantity: (state, action) => {

      const { id, quantity } = action.payload;
      if (!state.ids.includes(id)) return;

      const item = state.items.find(i => i.id === id);
      if (!item) return state;

      item.quantity = quantity;
      item.totalCost = item.amount * quantity;

      state.totalCost = state.items.reduce((total, item) => total + item.totalCost, 0);


      return state
    },

  },
});

export const { toggleCart, addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
