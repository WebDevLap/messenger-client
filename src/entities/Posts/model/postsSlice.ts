import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "@shared/api";

// постов еще нету

interface IState {
  posts: IPost[];
}

const initialState: IState = {
  posts: [],
};

const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const postsSlice = PostsSlice.reducer;
