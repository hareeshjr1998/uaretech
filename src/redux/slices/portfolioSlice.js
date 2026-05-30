import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 'All',
  selectedProject: null,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
    clearSelectedProject: (state) => {
      state.selectedProject = null;
    },
  },
});

export const { setCategory, setSelectedProject, clearSelectedProject } = portfolioSlice.actions;
export default portfolioSlice.reducer;
