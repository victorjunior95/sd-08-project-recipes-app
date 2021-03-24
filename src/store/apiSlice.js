import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchItem = createAsyncThunk(
  'api/fetchItem',
  async (endPoint) => {
    const data = await fetch(endPoint)
      .then((response) => response.json());
    return data;
  },
);

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: 'SN',
    loading: 'idle',
  },
  reducers: {},
  extraReducers: {
    [fetchItem.pending]: (state) => ({ ...state, loading: 'pending' }),
    [fetchItem.fulfilled]: (state, action) => ({
      data: action.payload, loading: 'fulfilled',
    }),
    [fetchItem.rejected]: (state) => ({ ...state, loading: 'rejected' }),
  },
});

export default apiSlice.reducer;
