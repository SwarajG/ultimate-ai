import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedIntent: [],
};

export const intentSlice = createSlice({
  name: 'intent',
  initialState,
  reducers: {
    setSelectedIntentList: (state, { payload }) => {
      state.selectedIntent = [...state.selectedIntent, payload];
    },
    removeIntentFromSelection: (state, { payload }) => {
      state.selectedIntent = state.selectedIntent.filter((id) => payload !== id);
    },
    selectAll: (state, { payload }) => {
      state.selectedIntent = payload;
    }
  },
});

export const { setSelectedIntentList, removeIntentFromSelection, selectAll } = intentSlice.actions;
export const getSelectedIntentList = (state) => state.app.intent.selectedIntent;

export default intentSlice.reducer;
