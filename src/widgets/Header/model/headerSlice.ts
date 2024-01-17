import { createSlice } from "@reduxjs/toolkit";

interface IState {
  loginIsOpen: boolean;
  registerIsOpen: boolean;
}

const initialState: IState = {
  loginIsOpen: false,
  registerIsOpen: false,
};

const HeaderSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setLoginIsOpen: (state, action) => {
      state.loginIsOpen = action.payload;
    },
    setRegisterIsOpen: (state, action) => {
      state.registerIsOpen = action.payload;
    },
  },
});

export const { setLoginIsOpen, setRegisterIsOpen } =
  HeaderSlice.actions;
export const headerSlice = HeaderSlice.reducer;
