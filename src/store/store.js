import { configureStore } from "@reduxjs/toolkit";
import movieoreducer from "./movieoSlice";
export const store = configureStore({
  reducer: {
    movieoData: movieoreducer,
  },
});
