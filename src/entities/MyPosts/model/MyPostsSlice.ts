import { createSlice } from "@reduxjs/toolkit";

interface IState {}

const initialState: IState = {};

const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const {} = PostsSlice.actions
export const postsSlice = PostsSlice.reducer;
