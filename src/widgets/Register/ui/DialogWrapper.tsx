import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { ActionBtns } from "./ActionBtns";

export const DialogWrapper = ({
  children,
  onSubmit,
  isOpen,
  onClose,
  disabled,
}: {
  children: React.ReactNode | React.ReactNode[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => unknown;
  isOpen: boolean;
  onClose: () => unknown;
  disabled: boolean;
}) => {
  return (
    <Dialog open={isOpen} maxWidth="sm" fullWidth onClose={onClose}>
      <DialogTitle>Log In</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContentText paragraph>Log in to use app</DialogContentText>

        <DialogContent sx={{ pt: 0 }}>{children}</DialogContent>
        <DialogActions>
          <ActionBtns onClose={onClose} disabled={disabled} />
        </DialogActions>
      </form>
    </Dialog>
  );
};
