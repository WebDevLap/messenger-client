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
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { ActionBtns } from "./ActionBtns";
import { DialogWrapper } from "./DialogWrapper";

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
  const [isSending, setIsSending] = React.useState(false);
  const loginDialogIsOpen = useAppSelector((state) => state.login.isDialogOpen);
  
  // check for valid
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

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValid) return;
    setIsSending(true);
    const res = await login({
      email: email.value,
      password: password.value,
    });
    onClose();
    alInputsClear();
    setIsSending(false);
  }

  function onClose() {
    dispatch(setLoginDialogIsOpen(false));
  }

  return (
    <DialogWrapper
      isOpen={loginDialogIsOpen}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <DialogContent sx={{ pt: 0 }}>
        <DialogContentText paragraph>Log in to use app</DialogContentText>
        <EmailInput input={email} />
        <PasswordInput input={password} />
      </DialogContent>
      <DialogActions>
        <ActionBtns onClose={onClose} disabled={!isValid || isSending} />
      </DialogActions>
    </DialogWrapper>
  );
};
