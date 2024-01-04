import { useAppSelector } from "@app/store";
import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { setIsOpen } from "..";
import { useThrottle } from "@shared/hooks/useThrottle";

export const SnackbarEl = () => {
  const { isOpen, text, severity } = useAppSelector((state) => state.snackbar);
  const throttle = useThrottle();

  React.useEffect(() => {
    throttle(() => setIsOpen(false), 3500);
  });

  function close() {
    setIsOpen(false);
  }

  return (
    <Snackbar open={isOpen} onClose={close}>
      <Alert variant="filled" severity={severity}>
        {text}
      </Alert>
    </Snackbar>
  );
};
