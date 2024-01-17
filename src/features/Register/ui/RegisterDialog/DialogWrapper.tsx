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
      <DialogTitle>Sign Up</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent sx={{ pt: 0 }}>
          <DialogContentText paragraph>Sign up to use app</DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <ActionBtns onClose={onClose} disabled={disabled} />
        </DialogActions>
      </form>
    </Dialog>
  );
};
