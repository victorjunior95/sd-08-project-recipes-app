import { configureStore } from '@reduxjs/toolkit';
import search from './searchSlice';
import login from './loginSlice';
import api from './apiSlice';

export default configureStore({
  reducer: {
    search,
    login,
    api,
  },
});
