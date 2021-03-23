import { configureStore } from '@reduxjs/toolkit';
import search from './searchSlice';

export default configureStore({
  reducer: {
    search,
  },
});
