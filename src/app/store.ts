import { userSlice } from "@entities/User/model/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "@widgets/Login";
import { registerSlice } from "@widgets/Register";
import { snackbarSlice } from "@widgets/Snackbar";
import { userProfileSlice } from "@widgets/UserProfileCard";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userSlice,
    login: loginSlice,
    register: registerSlice,
    snackbar: snackbarSlice,
    userProfile: userProfileSlice,
  },
});

export type RootType = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;
