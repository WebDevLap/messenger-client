import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SeverityType = "info" | "success" | "error" | "warning";

interface IState {
  isOpen: boolean;
  text: string;
  severity: SeverityType;
}

const initialState: IState = {
  text: "",
  isOpen: false,
  severity: "info",
};

const SnackbarSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    setSeverity: (state, action: PayloadAction<SeverityType>) => {
      state.severity = action.payload;
    },
    snackSuccess: (state, action: PayloadAction<string>) => {
      state.severity = "success";
      state.text = action.payload;
      state.isOpen = true;
    },

    snackError: (state, action: PayloadAction<string>) => {
      state.severity = "error";
      state.text = action.payload;
      state.isOpen = true;
    },
  },
});

export const { setText, setIsOpen, setSeverity, snackSuccess, snackError } =
  SnackbarSlice.actions;
export const snackbarSlice = SnackbarSlice.reducer;
