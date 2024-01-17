import { useAppDispatch } from "@app/store";
import { DialogActions, DialogContent, DialogContentText } from "@mui/material";
import React from "react";
import { useInput } from "@shared/hooks/functional";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { ActionBtns } from "./ActionBtns";
import { DialogWrapper } from "./DialogWrapper";
import { snackError, snackSuccess } from "@widgets/Snackbar";
import { setUser } from "@entities/User";
import AuthService from "@Services/AuthService";

export const LoginDialog = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => unknown;
}) => {
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
  const [isValid, setIsValid] = React.useState(false);
  const [isSending, setIsSending] = React.useState(false);

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
    try {
      const res = await AuthService.login({
        email: email.value,
        password: password.value,
      });
      localStorage.setItem("token", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);
      const user = await AuthService.authMe();
      dispatch(snackSuccess("Успешный вход"));
      dispatch(setUser(user.data));
    } catch (err) {
      dispatch(snackError("Не удалось войти в аккаунт"));
      throw new Error("Query error");
    } finally {
      setIsSending(false);
    }

    onClose();
    alInputsClear();
  }

  return (
    <DialogWrapper isOpen={isOpen} onClose={onClose} onSubmit={onSubmit}>
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
