import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import navReducer from './slices/navSlice';
import portfolioReducer from './slices/portfolioSlice';
import contactReducer from './slices/contactSlice';
import loadingReducer from './slices/loadingSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    nav: navReducer,
    portfolio: portfolioReducer,
    contact: contactReducer,
    loading: loadingReducer,
  },
});
