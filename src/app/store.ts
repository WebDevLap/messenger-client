import { userSlice } from "@entities/User/model/userSlice";
import { userProfileSlice } from "@entities/UserProfile";
import { configureStore } from "@reduxjs/toolkit";
import { snackbarSlice } from "@widgets/Snackbar";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const reducer = {
  user: userSlice,
  snackbar: snackbarSlice,
  userProfile: userProfileSlice,
};

export const store = configureStore({ reducer: reducer });

export type RootType = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;
