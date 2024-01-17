import { Box, Button } from "@mui/material";
import React from "react";
import { useLocalDispatch } from "../model/store";
import { setLoginIsOpen, setRegisterIsOpen } from "../model/headerSlice";

export const AuthBtns = () => {
  const dispatch = useLocalDispatch();

  function loginOpen() {
    dispatch(setLoginIsOpen(true));
  }
  function registerOpen() {
    dispatch(setRegisterIsOpen(true));
  }

  return (
    <Box>
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        size="large"
        onClick={loginOpen}
        color="inherit"
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
