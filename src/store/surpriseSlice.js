import { createSlice } from '@reduxjs/toolkit';

export const surpriseSlice = createSlice({
  name: 'surprise',
  initialState: {
    surpriseRedirect: false,
  },
  reducers: {
    buttonSurprise: (state) => ({ surpriseRedirect: !state.surpriseRedirect }),
  },
});

export const { buttonSurprise } = surpriseSlice.actions;

export default surpriseSlice.reducer;
