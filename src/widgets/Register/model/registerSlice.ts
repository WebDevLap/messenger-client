import { createSlice } from "@reduxjs/toolkit";

interface IState {
  isDialogOpen: boolean;
}

const initialState: IState = {
  isDialogOpen: false,
};

const RegisterSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setRegisterDialogIsOpen: (state, action) => {
      state.isDialogOpen = action.payload
    },
  },
});

export const { setRegisterDialogIsOpen } = RegisterSlice.actions;
export const registerSlice = RegisterSlice.reducer;
