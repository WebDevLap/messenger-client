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
import React from "react";
import { setLoginDialogIsOpen } from "..";
import { useLogin } from "@features/Auth/hooks/useLogin";
import { useInput } from "@shared/hooks/functional";

export const LoginDialog = () => {
  const email = useInput("", {
    maxWidth: 254,
    isEmail: true,
    noSpacing: true,
  });
  const password = useInput("", {
    maxWidth: 128,
    minWidth: 7,
    noSpacing: true,
  });
  const dispatch = useAppDispatch();
  const login = useLogin();
  const [isValid, setIsValid] = React.useState(false);
  const loginDialogIsOpen = useAppSelector((state) => state.login.isDialogOpen);
  React.useEffect(() => {
    if (email.isValid && password.isValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email.isValid, password.isValid]);

  function alInputsClear() {
    email.clear();
    password.clear();
  }

  async function onSubmit() {
    if (!isValid) return;
    const res = await login({
      email: email.value,
      password: password.value,
    });
    onClose();
    alInputsClear();
  }

  function onClose() {
    dispatch(setLoginDialogIsOpen(false));
  }

  return (
    <Dialog open={loginDialogIsOpen} maxWidth="sm" fullWidth onClose={onClose}>
      <DialogTitle>Log In</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent sx={{ pt: 0 }}>
          <DialogContentText paragraph>Log in to use app</DialogContentText>
          <TextField
            {...email.handlers}
            helperText={<div style={{ minHeight: 30 }}>{email.errorText}</div>}
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
  );
};
