import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slices/modalSlice';
import gameSlice from './slices/gameSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    game: gameSlice,
  },
});

export default store;
