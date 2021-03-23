import { configureStore } from '@reduxjs/toolkit';
import search from './searchSlice';
import login from './loginSlice';

export default configureStore({
  reducer: {
    search,
    login,
  },
});
