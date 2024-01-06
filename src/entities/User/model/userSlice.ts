import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types";

interface IState {
  user: IUser | null;
}

const initialState: IState = {
  user: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
    setUserAvatar: (state, action: PayloadAction<string>) => {
      if (!state.user) return;
      state.user.avatar = action.payload;
    },
    setUserNickname: (state, action: PayloadAction<string>) => {
      if (!state.user) return;

      state.user.nickname = action.payload;
    },
  },
});

export const { setUser, setUserAvatar, setUserNickname } = UserSlice.actions;
export const userSlice = UserSlice.reducer;
