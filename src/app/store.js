import { configureStore } from "@reduxjs/toolkit";
import { postReducer, themeReducer } from "../features/postSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    theme: themeReducer,
  },
});
