import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  intentList: [],
};

export const intentSlice = createSlice({
  name: 'intent',
  initialState,
  reducers: {
    setIntentList: (state, { payload }) => {
      state.intentList = payload;
    },
  },
});

export const { setIntentList } = intentSlice.actions;
export const getIntentList = (state) => state.data.intent.intentList;

export default intentSlice.reducer;
