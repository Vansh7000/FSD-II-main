import { createSlice } from '@reduxjs/toolkit';
import deskLampImage from '../assets/desk-lamp.svg';
import keyboardImage from '../assets/keyboard.svg';
import headphonesImage from '../assets/headphones.svg';
import coffeeMugImage from '../assets/coffee-mug.svg';

const initialState = {
  products: [
    { id: 'p1', name: 'Minimal Desk Lamp', price: 32, image: deskLampImage },
    { id: 'p2', name: 'Ergonomic Keyboard', price: 72, image: keyboardImage },
    { id: 'p3', name: 'Wireless Headphones', price: 98, image: headphonesImage },
    { id: 'p4', name: 'Coffee Mug', price: 16, image: coffeeMugImage },
  ],
};

const cartSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
