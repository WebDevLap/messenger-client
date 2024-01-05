import { useAppDispatch, useAppSelector } from "@app/store";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useInput } from "@shared/hooks/useInput";
import React from "react";
import { setRegisterDialogIsOpen } from "..";
import { useRegister } from "@features/Auth";
import { setIsOpen, setSeverity, setText } from "@widgets/Snackbar";

export const RegisterDialog = () => {
  const email = useInput("", {
    maxWidth: 254,
    isEmail: true,
  });
  const password = useInput("", {
    maxWidth: 128,
    minWidth: 7,
  });
  const firstName = useInput("", {
    maxWidth: 150,
    minWidth: 2,
  });
  const lastName = useInput("", {
    maxWidth: 150,
    minWidth: 2,
  });
  const nickName = useInput("", {
    maxWidth: 25,
    minWidth: 5,
    noSpacing: true,
    specialChars: "_",
  });
  const [isValid, setIsValid] = React.useState(false);
  const dispatch = useAppDispatch();
  const register = useRegister();
  const loginDialogIsOpen = useAppSelector(
    (state) => state.register.isDialogOpen
  );

  function alInputsClear() {
    email.clear();
    password.clear();
    firstName.clear();
    lastName.clear();
    nickName.clear();
  }

  React.useEffect(() => {
    if (email.isValid && password.isValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email.isValid, password.isValid]);

  async function onSubmit() {
    if (!isValid) {
      dispatch(setText("Форма не валидна!"));
      dispatch(setSeverity("error"));
      dispatch(setIsOpen(true));

      return;
    }
    const res = await register({
      firstName: firstName.value,
      lastName: lastName.value,
      nickname: nickName.value,
      password: password.value,
      email: email.value,
    });
    onClose();
    alInputsClear();
  }

  function onClose() {
    dispatch(setRegisterDialogIsOpen(false));
  }

  return (
    <>
      <Dialog
        open={loginDialogIsOpen}
        maxWidth="sm"
        fullWidth
        onClose={onClose}
      >
        <DialogTitle>Log In</DialogTitle>
        <form onSubmit={onSubmit}>
          <DialogContent sx={{ pt: 0 }}>
            <DialogContentText paragraph>Log in to use app</DialogContentText>
            <TextField
              {...firstName.handlers}
              helperText={
                <div style={{ minHeight: 30 }}>{firstName.errorText}</div>
              }
              error={firstName.isShowError}
              value={firstName.value}
              fullWidth
              label="Input first name"
            ></TextField>
            <TextField
              {...lastName.handlers}
              helperText={
                <div style={{ minHeight: 30 }}>{lastName.errorText}</div>
              }
              error={lastName.isShowError}
              value={lastName.value}
              fullWidth
              label="Input last name"
            ></TextField>
            <TextField
              {...nickName.handlers}
              helperText={
                <div style={{ minHeight: 30 }}>{nickName.errorText}</div>
              }
              error={nickName.isShowError}
              value={nickName.value}
              fullWidth
              label="Input nickname"
            ></TextField>
            <TextField
              {...email.handlers}
              helperText={
                <div style={{ minHeight: 30 }}>{email.errorText}</div>
              }
              error={email.isShowError}
              value={email.value}
              fullWidth
              label="Input email"
            ></TextField>
            <TextField
              {...password.handlers}
              helperText={
                <div style={{ minHeight: 30 }}>{password.errorText}</div>
              }
              error={password.isShowError}
              value={password.value}
              label="Input password"
              fullWidth
            ></TextField>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={onClose}>
              close
            </Button>
            <Button variant="contained" color="pink" type="submit">
              submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
