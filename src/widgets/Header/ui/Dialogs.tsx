import { LoginDialog } from "@features/Login";
import { RegisterDialog } from "@features/Register";
import React from "react";
import { setLoginIsOpen, setRegisterIsOpen } from "../model/headerSlice";
import { useLocalDispatch, useLocalSelector } from "../model/store";

export const Dialogs = () => {
  const { loginIsOpen, registerIsOpen } = useLocalSelector(
    (state) => state.header
  );
  const localDispatch = useLocalDispatch();
  function onLoginClose() {
    localDispatch(setLoginIsOpen(false));
  }
  function onRegisterClose() {
    localDispatch(setRegisterIsOpen(false));
  }
  return (
    <>
      <LoginDialog isOpen={loginIsOpen} onClose={onLoginClose} />
      <RegisterDialog isOpen={registerIsOpen} onClose={onRegisterClose} />
    </>
  );
};
