import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = false;

const checkSlice = createSlice({
  name: 'checkSlice',
  initialState,
  reducers: {
    checkAnswer(state, action) {
      return action.payload;
    },
  },
});

export const { checkAnswer } = checkSlice.actions;
export default checkSlice.reducer;

export const checkAnswerAsync = (input) => (dispatch) => {
  axios.post('/', { input })
    .then((res) => dispatch(checkAnswer(res.data)));
};
