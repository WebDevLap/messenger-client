import { useAppDispatch } from "@app/store";
import React from "react";
import {
  setIsOpen as setIsOpenSnack,
  setSeverity,
  setText,
  snackError,
  snackSuccess,
} from "@widgets/Snackbar";
import { useInput } from "@shared/hooks/functional";
import { FirstNameInput } from "./FirstNameInput";
import { LastNameInput } from "./LastNameInput";
import { NicknameInput } from "./NicknameInput";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { DialogWrapper } from "./DialogWrapper";
import AuthService from "@Services/AuthService";
import { setUser } from "@entities/User";

export const RegisterDialog = ({
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
  const firstName = useInput("", {
    maxWidth: 15,
    minWidth: 2,
    noSpacing: true,
  });
  const lastName = useInput("", {
    maxWidth: 15,
    minWidth: 2,
    noSpacing: true,
  });
  const nickName = useInput("", {
    maxWidth: 15,
    minWidth: 5,
    noSpacing: true,
    specialChars: "_",
  });
  const dispatch = useAppDispatch();
  const [isValid, setIsValid] = React.useState(false);
  const [isSending, setIsSending] = React.useState(false);

  function alInputsClear() {
    email.clear();
    password.clear();
    firstName.clear();
    lastName.clear();
    nickName.clear();
  }
  function showErrors() {
    email.showError();
    password.showError();
    firstName.showError();
    lastName.showError();
    nickName.showError();
  }

  React.useEffect(() => {
    if (email.isValid && password.isValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email.isValid, password.isValid]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValid) {
      dispatch(setText("Форма не валидна!"));
      dispatch(setSeverity("error"));
      dispatch(setIsOpenSnack(true));
      showErrors();
      return;
    }
    setIsSending(true);
    try {
      const registerRes = await AuthService.register({
        firstName: firstName.value,
        lastName: lastName.value,
        nickname: nickName.value,
        password: password.value,
        email: email.value,
      });

      const userRes = await AuthService.authMe();

      dispatch(setUser(userRes.data));
      dispatch(snackSuccess("Вы успешно зарегистрировались!"));

      onClose();
      alInputsClear();
    } catch (err) {
      dispatch(snackError("Не удалось зарегистрироваться!"));
      throw new Error("Query error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <DialogWrapper
      onSubmit={onSubmit}
      isOpen={isOpen}
      onClose={onClose}
      disabled={!isValid || isSending}
    >
      <FirstNameInput input={firstName} />
      <LastNameInput input={lastName} />
      <NicknameInput input={nickName} />
      <EmailInput input={email} />
      <PasswordInput input={password} />
    </DialogWrapper>
  );
};
