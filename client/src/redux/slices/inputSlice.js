import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const inputSlice = createSlice({
  name: 'inputSlice',
  initialState,
  reducers: {
    setInput(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { setInput } = inputSlice.actions;
export default inputSlice.reducer;

export const getInput = (input) => (dispatch) => {
  dispatch(setInput(input));
};
