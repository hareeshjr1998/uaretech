import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTheme: 'nebula',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state) => {
      state.activeTheme = 'nebula';
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
