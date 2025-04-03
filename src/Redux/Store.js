import {configureStore} from '@reduxjs/toolkit';
import movieReducer from './MovieSlice.js';

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export default store;