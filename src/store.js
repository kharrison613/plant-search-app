import { configureStore } from '@reduxjs/toolkit';
import plantsReducer from './features/plantsSlice';

export const store = configureStore({
  reducer: {
    plants: plantsReducer,
  },
});