// store.js
import { configureStore } from "@reduxjs/toolkit";
import { tripSlice } from "./tripslice";

export const store = configureStore({
  reducer: {
    tripplanner: tripSlice.reducer,
  },
});