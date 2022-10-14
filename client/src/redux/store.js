import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slices/modalSlice';
import gameSlice from './slices/gameSlice';
import checkSlice from './slices/checkSlise';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    game: gameSlice,
    check: checkSlice,
  },
});

export default store;
