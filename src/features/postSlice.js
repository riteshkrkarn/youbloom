import { createSlice } from "@reduxjs/toolkit";

const postInitialState = {
  selectedPost: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState: postInitialState,
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
});

const themeInitialState = { dark: false };

const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitialState,
  reducers: {
    toggle: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { setSelectedPost } = postSlice.actions;
export const postReducer = postSlice.reducer;
export const themeReducer = themeSlice.reducer;
