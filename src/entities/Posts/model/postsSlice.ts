import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "..";

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

});

export const postsSlice = PostsSlice.reducer;
