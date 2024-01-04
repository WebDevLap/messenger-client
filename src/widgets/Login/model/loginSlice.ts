import { createSlice } from "@reduxjs/toolkit";

interface IState {
  isDialogOpen: boolean;
}

const initialState: IState = {
  isDialogOpen: false,
};

const LoginSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLoginDialogIsOpen: (state, action) => {
      state.isDialogOpen = action.payload
    },
  },
});

export const { setLoginDialogIsOpen } = LoginSlice.actions;
export const loginSlice = LoginSlice.reducer;
