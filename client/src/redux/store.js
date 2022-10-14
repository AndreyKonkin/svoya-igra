import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slices/modalSlice';
import gameSlice from './slices/gameSlice';
import checkSlice from './slices/checkSlise';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    game: gameSlice,
    check: checkSlice,
    user: userSlice,
  },
});

export default store;
