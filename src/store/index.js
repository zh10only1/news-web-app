import { configureStore } from "@reduxjs/toolkit";
import favorite from './favoriteSlice';

const store = configureStore({
    reducer: { favorite }
});

export default store;