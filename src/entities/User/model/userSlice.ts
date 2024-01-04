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
    }
  },
});

export const { setUser } = UserSlice.actions;
export const userSlice = UserSlice.reducer;
