import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    finishLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { finishLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
