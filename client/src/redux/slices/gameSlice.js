import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    getAnswer(state, action) {
      return [...state, {
        prise: action.payload.prise,
        answer: action.payload.answer,
      }];
    },
  },
});

export const { getAnswer } = gameSlice.actions;
export default gameSlice.reducer;
