import { configureStore } from "@reduxjs/toolkit";
import { createPostSlice } from "./createPostSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    createPost: createPostSlice,
  },
});

export type LocalType = ReturnType<typeof store.getState>

export const useLocalSelector: TypedUseSelectorHook<LocalType> = useSelector;
export const useLocalDispatch: () => typeof store.dispatch = useDispatch;

