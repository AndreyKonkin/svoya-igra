import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

const checkSlice = createSlice({
  name: 'checkSlice',
  initialState,
  reducers: {
    checkAnswer(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { checkAnswer } = checkSlice.actions;
export default checkSlice.reducer;

export const checkAnswerAsync = (id, input) => (dispatch) => {
  axios.post(`/game/check/${id}`, { input })
    .then((res) => dispatch(checkAnswer(res.data)));
};
