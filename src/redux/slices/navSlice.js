import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  activeSection: 'home',
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, setActiveSection } = navSlice.actions;
export default navSlice.reducer;
