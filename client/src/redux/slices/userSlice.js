import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userList = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
    logOut() {
      return null;
    },
  },
});
export const { setUser, logOut } = userList.actions;
export default userList.reducer;

export const checkUser = () => (dispatch) => {
  axios.post('/user/check')
    .then((res) => dispatch(setUser(res.data)))
    .catch(console.log);
};

export const signupUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  axios.post('/user/signup', inputs)
    .then((res) => dispatch(setUser(res.data)))
    .catch(console.log);
};

export const loginUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  axios.post('/user/login', inputs)
    .then((res) => dispatch(setUser(res.data)))
    .catch(console.log);
};

export const logoutUser = () => (dispatch) => {
  axios('/user/logout')
    .then(() => dispatch(logOut()))
    .catch(console.log);
};
