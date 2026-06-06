import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import navReducer from './slices/navSlice';
import portfolioReducer from './slices/portfolioSlice';
import contactReducer from './slices/contactSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    nav: navReducer,
    portfolio: portfolioReducer,
    contact: contactReducer,
  },
});
