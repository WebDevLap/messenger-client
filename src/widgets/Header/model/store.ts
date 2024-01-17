import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { headerSlice } from "./headerSlice";
import { reducer } from "@app/store";

export const localStore = configureStore({
  reducer: {
    header: headerSlice,
    ...reducer,
  },
});


export type LocalType = ReturnType<typeof localStore.getState>;

export const useLocalSelector: TypedUseSelectorHook<LocalType> = useSelector;
export const useLocalDispatch: () => typeof localStore.dispatch = useDispatch;
