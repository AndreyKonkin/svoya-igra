import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slices/modalSlice';
import gameSlice from './slices/gameSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    game: gameSlice,
    user: userSlice,
  },
});

export default store;
