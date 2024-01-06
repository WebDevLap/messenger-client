import { useAppDispatch, useAppSelector } from "@app/store";
import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { setIsOpen } from "..";
import { useDebounce } from "@shared/hooks/functional";

export const SnackbarEl = () => {
  const { isOpen, text, severity } = useAppSelector((state) => state.snackbar);
  const debounce = useDebounce();
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    debounce(close, 3000);
  }, [isOpen]);

  function close() {
    dispatch(setIsOpen(false));
  }

  return (
    <Snackbar open={isOpen} onClose={close}>
      <Alert variant="filled" severity={severity}>
        {text}
      </Alert>
    </Snackbar>
  );
};
