import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    getAnswer(state, action) {
      return [...state, {
        id: action.payload.id,
        answer: action.payload.answer,
      }];
    },
  },
});

export const { getAnswer } = gameSlice.actions;
export default gameSlice.reducer;
