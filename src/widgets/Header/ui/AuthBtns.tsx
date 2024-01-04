import { useAppDispatch } from "@app/store";
import { Box, Button } from "@mui/material";
import { setLoginDialogIsOpen } from "@widgets/Login";
import { setRegisterDialogIsOpen } from "@widgets/Register";
import React from "react";

export const AuthBtns = () => {
  const dispatch = useAppDispatch();

  function loginOpen() {
    dispatch(setLoginDialogIsOpen(true));
  }
  function registerOpen() {
    dispatch(setRegisterDialogIsOpen(true));
  }

  return (
    <Box>
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        size="large"
        onClick={loginOpen}
      >
        log in
      </Button>
      <Button
        color="pink"
        variant="contained"
        size="large"
        onClick={registerOpen}
      >
        sign up
      </Button>
    </Box>
  );
};
